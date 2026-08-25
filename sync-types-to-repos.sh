#!/usr/bin/env bash
#
# Build local spotcharge-types and copy it into sibling project node_modules.
# Never runs `npm install file:...` — that writes file:../spotcharge-types into
# package.json and lockfiles, and some npm versions ignore --no-save.
#
# Bumps the local patch version first so unpublished work is not stuck on an
# already-published number (npm install / IDEs treat that as "already have it").
# Skip the bump with SYNC_NO_BUMP=1.
#
# Discovers sibling packages that depend on spotcharge-types (skips git/gitlab
# specs). Pins each package.json to ^<version> and copies dist + src.
#
# Usage (from spotcharge-types):
#   ./sync-types-to-repos.sh
#   npm run sync-repos

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TYPES_DIR="$SCRIPT_DIR"
PROJECTS_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log() {
  printf '%b\n' "$1"
}

fail() {
  log "${RED}ERROR:${NC} $1"
  exit 1
}

read_types_version() {
  node -p "require('$TYPES_DIR/package.json').version"
}

bump_local_patch() {
  if [[ "${SYNC_NO_BUMP:-}" == "1" ]]; then
    log "SYNC_NO_BUMP=1 — keeping spotcharge-types@$(read_types_version)"
    return 0
  fi

  local before after
  before="$(read_types_version)"
  log "Bumping patch ${before} → next (unpublished local sync)..."
  cd "$TYPES_DIR" || fail "cannot cd to $TYPES_DIR"
  npm version patch --no-git-tag-version >/dev/null
  after="$(read_types_version)"
  log "  ${GREEN}${before} → ${after}${NC}"
}

# Sibling packages with a semver/file: spotcharge-types dep. Skips git hosts.
discover_targets() {
  node - "$PROJECTS_ROOT" "$TYPES_DIR" <<'EOF'
const fs = require('fs');
const path = require('path');

const root = process.argv[2];
const typesDir = process.argv[3];
const skipNames = new Set(['node_modules', 'dist', '.git', 'coverage']);
const gitSpec = /^(gitlab:|github:|git\+|https?:|ssh:)/;
const out = [];

function specOf(pkg) {
  return (
    (pkg.dependencies && pkg.dependencies['spotcharge-types']) ||
    (pkg.devDependencies && pkg.devDependencies['spotcharge-types']) ||
    null
  );
}

function walk(dir, depth) {
  if (depth > 3) {
    return;
  }
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }

  const pkgPath = path.join(dir, 'package.json');
  if (fs.existsSync(pkgPath) && path.resolve(dir) !== path.resolve(typesDir)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
      const spec = specOf(pkg);
      if (spec && !gitSpec.test(spec)) {
        out.push(path.relative(root, dir));
      }
    } catch {
      // ignore unreadable package.json
    }
  }

  for (const entry of entries) {
    if (!entry.isDirectory() || skipNames.has(entry.name) || entry.name.startsWith('.')) {
      continue;
    }
    walk(path.join(dir, entry.name), depth + 1);
  }
}

walk(root, 0);
out.sort();
process.stdout.write(out.join('\n') + (out.length ? '\n' : ''));
EOF
}

# Surgical string replace — do not JSON.parse/stringify lockfiles (preserves formatting).
pin_types_spec() {
  local project_dir="$1"
  local published_spec="$2"
  local types_version="$3"
  node - "$project_dir" "$published_spec" "$types_version" <<'EOF'
const fs = require('fs');
const path = require('path');

const projectDir = process.argv[2];
const publishedSpec = process.argv[3];
const typesVersion = process.argv[4];
const files = ['package.json', 'package-lock.json', 'npm-shrinkwrap.json'];

const pinSpecs = (raw) =>
  raw
    .replace(/("spotcharge-types"\s*:\s*)"(file:[^"]+|\^?\d+\.\d+\.\d+)"/g, `$1"${publishedSpec}"`)
    .replace(/\n    "\.\.(?:\/\.\.)*\/spotcharge-types": \{[\s\S]*?\n    \},/g, '')
    .replace(
      /    "node_modules\/spotcharge-types": \{\s*"resolved": "(?:\.\.\/)+spotcharge-types",\s*"link": true\s*\}/g,
      [
        '    "node_modules/spotcharge-types": {',
        `      "version": "${typesVersion}",`,
        '      "license": "ISC"',
        '    }',
      ].join('\n')
    );

const changed = [];
for (const name of files) {
  const filePath = path.join(projectDir, name);
  if (!fs.existsSync(filePath)) {
    continue;
  }
  const raw = fs.readFileSync(filePath, 'utf8');
  const next = pinSpecs(raw);
  if (next !== raw) {
    fs.writeFileSync(filePath, next);
    changed.push(name);
  }
}

if (changed.length) {
  process.stdout.write(`pinned spotcharge-types@${publishedSpec} in ${changed.join(', ')}\n`);
}
EOF
}

has_file_spec() {
  local file_path="$1"
  [[ -f "$file_path" ]] && grep -qE '"spotcharge-types"[[:space:]]*:[[:space:]]*"file:' "$file_path"
}

copy_types_into_node_modules() {
  local project_dir="$1"
  local dest="$project_dir/node_modules/spotcharge-types"
  local tmp="${dest}.syncing.$$"

  mkdir -p "$project_dir/node_modules"
  rm -rf "$tmp"
  mkdir -p "$tmp/dist"
  cp "$TYPES_DIR/package.json" "$tmp/package.json"
  cp -R "$TYPES_DIR/dist/." "$tmp/dist/"
  if [[ -d "$TYPES_DIR/src" ]]; then
    mkdir -p "$tmp/src"
    cp -R "$TYPES_DIR/src/." "$tmp/src/"
  fi

  mkdir -p "$dest"
  # Replace package files in place. Ignore leftover .cursor/.idea — those get
  # copied into node_modules when dest was once a full-repo copy, and the
  # sandbox/IDE often locks them so `rm -rf dest` cannot finish.
  if command -v rsync >/dev/null 2>&1; then
    rsync -a --delete --exclude '.cursor/' --exclude '.idea/' "$tmp/" "$dest/"
  else
    rm -rf "$dest/dist" "$dest/src" "$dest/package.json"
    cp "$tmp/package.json" "$dest/package.json"
    cp -R "$tmp/dist" "$dest/dist"
    if [[ -d "$tmp/src" ]]; then
      cp -R "$tmp/src" "$dest/src"
    fi
  fi
  rm -rf "$tmp"
  rm -rf "$dest/.cursor" "$dest/.idea" 2>/dev/null || true
}

verify_copy() {
  local project_dir="$1"
  local label="$2"
  local types_version="$3"
  local published_spec="$4"
  node - "$project_dir" "$label" "$types_version" "$published_spec" "$TYPES_DIR" <<'EOF'
const fs = require('fs');
const path = require('path');

const projectDir = process.argv[2];
const label = process.argv[3];
const typesVersion = process.argv[4];
const publishedSpec = process.argv[5];
const typesDir = process.argv[6];
const dest = path.join(projectDir, 'node_modules', 'spotcharge-types');
const issues = [];

const pkg = JSON.parse(fs.readFileSync(path.join(projectDir, 'package.json'), 'utf8'));
const spec =
  (pkg.dependencies && pkg.dependencies['spotcharge-types']) ||
  (pkg.devDependencies && pkg.devDependencies['spotcharge-types']);
if (spec !== publishedSpec) {
  issues.push(`package.json spec is ${spec}, expected ${publishedSpec}`);
}

if (!fs.existsSync(path.join(dest, 'package.json'))) {
  issues.push('node_modules/spotcharge-types missing');
} else {
  const copied = JSON.parse(fs.readFileSync(path.join(dest, 'package.json'), 'utf8'));
  if (copied.version !== typesVersion) {
    issues.push(`copied version ${copied.version} != ${typesVersion}`);
  }
}

for (const rel of ['dist/index.js', 'dist/index.d.ts']) {
  if (!fs.existsSync(path.join(dest, rel))) {
    issues.push(`missing ${rel}`);
  }
}

if (fs.existsSync(path.join(typesDir, 'src')) && !fs.existsSync(path.join(dest, 'src'))) {
  issues.push('missing src (needed for declaration maps)');
}

const catalogSrc = path.join(typesDir, 'dist', 'models', 'api', 'catalog', 'index.d.ts');
const catalogDest = path.join(dest, 'dist', 'models', 'api', 'catalog', 'index.d.ts');
if (fs.existsSync(catalogSrc) && !fs.existsSync(catalogDest)) {
  issues.push('missing catalog d.ts');
}

if (issues.length) {
  process.stderr.write(`${label}: ${issues.join('; ')}\n`);
  process.exit(1);
}
EOF
}

install_types_in() {
  local project_dir="$1"
  local label="$2"
  local types_version="$3"
  local published_spec="$4"
  local pin_out

  if [[ ! -d "$project_dir" ]]; then
    log "${YELLOW}SKIP${NC} $label — directory not found: $project_dir"
    return 0
  fi

  if [[ ! -f "$project_dir/package.json" ]]; then
    log "${YELLOW}SKIP${NC} $label — no package.json"
    return 0
  fi

  log "\n${GREEN}==>${NC} $label"

  pin_out="$(pin_types_spec "$project_dir" "$published_spec" "$types_version")"
  if [[ -n "$pin_out" ]]; then
    log "  ${YELLOW}${pin_out}${NC}"
  fi

  if has_file_spec "$project_dir/package.json"; then
    log "  ${RED}file: spec still present in package.json${NC}"
    return 1
  fi

  log "  copying spotcharge-types@${types_version} into node_modules"
  copy_types_into_node_modules "$project_dir"
  verify_copy "$project_dir" "$label" "$types_version" "$published_spec"
  log "  ${GREEN}ok${NC}"
}

main() {
  cd "$TYPES_DIR" || fail "cannot cd to $TYPES_DIR"
  bump_local_patch

  local types_version published_spec
  types_version="$(read_types_version)"
  published_spec="^${types_version}"

  log "Building spotcharge-types@${types_version}..."
  npm start || fail "types build failed (npm start)"

  if [[ ! -f "$TYPES_DIR/dist/index.js" ]]; then
    fail "build output missing: dist/index.js — run npm start in spotcharge-types first"
  fi

  local targets=()
  local line
  while IFS= read -r line; do
    [[ -n "$line" ]] && targets+=("$line")
  done < <(discover_targets)

  if [[ "${#targets[@]}" -eq 0 ]]; then
    fail "no sibling packages depend on spotcharge-types"
  fi

  log "Targets: ${targets[*]}"

  local failed=0
  local target
  for target in "${targets[@]}"; do
    install_types_in "$PROJECTS_ROOT/$target" "$target" "$types_version" "$published_spec" || failed=$((failed + 1))
  done

  log ""
  if [[ "$failed" -gt 0 ]]; then
    fail "$failed project(s) failed to install spotcharge-types"
  fi

  log "${GREEN}Done.${NC} spotcharge-types@${types_version} synced."
  log "package.json uses ${published_spec}. Do not npm install in consumers until this version is published, or re-run sync-repos after."
}

main "$@"
