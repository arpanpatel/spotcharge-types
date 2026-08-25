#!/usr/bin/env bash
#
# Remove each sibling's node_modules/spotcharge-types, then install the
# published latest from npm. Does not copy the local tree and does not
# write file: specs.
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

remove_installed_types() {
  local project_dir="$1"
  local dest="$project_dir/node_modules/spotcharge-types"

  shopt -s nullglob
  rm -rf "$project_dir"/node_modules/.spotcharge-types-*
  shopt -u nullglob

  if [[ ! -e "$dest" ]]; then
    log "  no node_modules/spotcharge-types"
    return 0
  fi

  chmod -R u+w "$dest" 2>/dev/null || true
  rm -rf "$dest"
  if [[ -e "$dest" ]]; then
    fail "could not remove $dest (file busy?). Close anything watching that folder and retry."
  fi
  log "  removed node_modules/spotcharge-types"
}

install_latest() {
  local project_dir="$1"
  local latest="$2"

  log "  npm install spotcharge-types@${latest}"
  cd "$project_dir" || fail "cannot cd to $project_dir"

  if npm install "spotcharge-types@${latest}"; then
    return 0
  fi

  log "  ${YELLOW}retrying with --legacy-peer-deps${NC}"
  npm install --legacy-peer-deps "spotcharge-types@${latest}"
}

verify_installed() {
  local project_dir="$1"
  local label="$2"
  local latest="$3"
  local dest="$project_dir/node_modules/spotcharge-types/package.json"

  if [[ ! -f "$dest" ]]; then
    fail "$label — spotcharge-types missing after install"
  fi

  local installed
  installed="$(node -p "require('$dest').version")"
  if [[ "$installed" != "$latest" ]]; then
    fail "$label — installed ${installed}, expected ${latest}"
  fi
}

install_types_in() {
  local project_dir="$1"
  local label="$2"
  local latest="$3"

  if [[ ! -d "$project_dir" ]]; then
    log "${YELLOW}SKIP${NC} $label — directory not found: $project_dir"
    return 0
  fi

  if [[ ! -f "$project_dir/package.json" ]]; then
    log "${YELLOW}SKIP${NC} $label — no package.json"
    return 0
  fi

  log "\n${GREEN}==>${NC} $label"
  remove_installed_types "$project_dir"
  install_latest "$project_dir" "$latest"
  verify_installed "$project_dir" "$label" "$latest"
  log "  ${GREEN}ok${NC} spotcharge-types@${latest}"
}

main() {
  local latest
  log "Resolving latest spotcharge-types from npm..."
  latest="$(npm view spotcharge-types version)"
  [[ -n "$latest" ]] || fail "npm view spotcharge-types version returned empty"
  log "  latest is ${GREEN}${latest}${NC}"

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
    install_types_in "$PROJECTS_ROOT/$target" "$target" "$latest" || failed=$((failed + 1))
  done

  log ""
  if [[ "$failed" -gt 0 ]]; then
    fail "$failed project(s) failed to install spotcharge-types@${latest}"
  fi

  log "${GREEN}Done.${NC} spotcharge-types@${latest} installed from npm."
}

main "$@"
