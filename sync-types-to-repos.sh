#!/usr/bin/env bash
#
# Build local spotcharge-types and copy it into sibling project node_modules.
# Never runs `npm install file:...` — that writes file:../spotcharge-types into
# package.json and lockfiles, and some npm versions ignore --no-save.
#
# Any leftover file: spec is rewritten to ^<version> before install.
#
# Usage (from spotcharge-types):
#   ./sync-types-to-repos.sh
#   npm run sync-repos

set -u

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TYPES_DIR="$SCRIPT_DIR"
PROJECTS_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
TYPES_VERSION="$(node -p "require('$TYPES_DIR/package.json').version")"
PUBLISHED_SPEC="^${TYPES_VERSION}"

TARGETS=(
  "spotcharge-node-ocpp"
  "spotcharge.co.in_mobile-app"
  "spotcharge-superadmin"
  "spotcharge-superadmin/functions"
  "spotcharge-fleet-mobile-app"
  "spotcharge-client-portal"
  "spotcharge-script"
  "spotcharge-script/scripts"
)

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

# Surgical string replace — do not JSON.parse/stringify lockfiles (preserves formatting).
# Also drops lockfile "link": true entries so `npm install` cannot write file: back.
strip_file_specs() {
  local project_dir="$1"
  node - "$project_dir" "$PUBLISHED_SPEC" "$TYPES_VERSION" <<'EOF'
const fs = require('fs');
const path = require('path');

const projectDir = process.argv[2];
const publishedSpec = process.argv[3];
const typesVersion = process.argv[4];
const files = ['package.json', 'package-lock.json', 'npm-shrinkwrap.json'];
const registryEntry = [
  '    "node_modules/spotcharge-types": {',
  `      "version": "${typesVersion}",`,
  `      "resolved": "https://registry.npmjs.org/spotcharge-types/-/spotcharge-types-${typesVersion}.tgz",`,
  '      "license": "ISC"',
  '    }',
].join('\n');

const replaceFileSpecs = (raw) =>
  raw
    .replace(/("spotcharge-types"\s*:\s*)"file:[^"]+"/g, `$1"${publishedSpec}"`)
    .replace(/("version"\s*:\s*)"file:[^"]*spotcharge-types[^"]*"/g, `$1"${publishedSpec}"`)
    .replace(/\n    "\.\.(?:\/\.\.)*\/spotcharge-types": \{[\s\S]*?\n    \},/g, '')
    .replace(
      /    "node_modules\/spotcharge-types": \{\s*"resolved": "(?:\.\.\/)+spotcharge-types",\s*"link": true\s*\}/g,
      registryEntry
    );

const changed = [];
for (const name of files) {
  const filePath = path.join(projectDir, name);
  if (!fs.existsSync(filePath)) {
    continue;
  }
  const raw = fs.readFileSync(filePath, 'utf8');
  const next = replaceFileSpecs(raw);
  if (next !== raw) {
    fs.writeFileSync(filePath, next);
    changed.push(name);
  }
}

if (changed.length) {
  process.stdout.write(`removed file: spec → ${publishedSpec} in ${changed.join(', ')}\n`);
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

  rm -rf "$dest"
  shopt -s nullglob
  rm -rf "$project_dir"/node_modules/.spotcharge-types-*
  shopt -u nullglob

  mkdir -p "$dest/dist"
  cp "$TYPES_DIR/package.json" "$dest/package.json"
  cp -R "$TYPES_DIR/dist/." "$dest/dist/"
}

install_types_in() {
  local project_dir="$1"
  local label="$2"
  local strip_out

  if [[ ! -d "$project_dir" ]]; then
    log "${YELLOW}SKIP${NC} $label — directory not found: $project_dir"
    return 0
  fi

  if [[ ! -f "$project_dir/package.json" ]]; then
    log "${YELLOW}SKIP${NC} $label — no package.json"
    return 0
  fi

  log "\n${GREEN}==>${NC} $label"

  strip_out="$(strip_file_specs "$project_dir")"
  if [[ -n "$strip_out" ]]; then
    log "  ${YELLOW}${strip_out}${NC}"
  fi

  if has_file_spec "$project_dir/package.json"; then
    log "  ${RED}file: spec still present in package.json${NC}"
    return 1
  fi

  log "  copying spotcharge-types@${TYPES_VERSION} into node_modules"

  if copy_types_into_node_modules "$project_dir"; then
    log "  ${GREEN}ok${NC}"
    return 0
  fi

  log "  ${RED}failed${NC} in $project_dir"
  return 1
}

main() {
  log "Building spotcharge-types@${TYPES_VERSION}..."
  cd "$TYPES_DIR" || fail "cannot cd to $TYPES_DIR"
  npm start || fail "types build failed (npm start)"

  if [[ ! -f "$TYPES_DIR/dist/index.js" ]]; then
    fail "build output missing: dist/index.js — run npm start in spotcharge-types first"
  fi

  local failed=0
  local target project_dir

  for target in "${TARGETS[@]}"; do
    project_dir="$PROJECTS_ROOT/$target"
    install_types_in "$project_dir" "$target" || failed=$((failed + 1))
  done

  log ""
  if [[ "$failed" -gt 0 ]]; then
    fail "$failed project(s) failed to install spotcharge-types"
  fi

  log "${GREEN}Done.${NC} spotcharge-types@${TYPES_VERSION} synced. package.json uses ${PUBLISHED_SPEC}, not file:."
}

main "$@"
