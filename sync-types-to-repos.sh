#!/usr/bin/env bash
#
# Build local spotcharge-types and reinstall it into sibling project node_modules.
# Tries a normal npm install first; retries with --legacy-peer-deps on failure.
#
# Usage (from spotcharge-types):
#   ./sync-types-to-repos.sh
#   npm run sync-repos

set -u

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TYPES_DIR="$SCRIPT_DIR"
PROJECTS_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
TYPES_VERSION="$(node -p "require('$TYPES_DIR/package.json').version")"
TYPES_SPEC="file:${TYPES_DIR}"

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

install_types_in() {
  local project_dir="$1"
  local label="$2"

  if [[ ! -d "$project_dir" ]]; then
    log "${YELLOW}SKIP${NC} $label — directory not found: $project_dir"
    return 0
  fi

  if [[ ! -f "$project_dir/package.json" ]]; then
    log "${YELLOW}SKIP${NC} $label — no package.json"
    return 0
  fi

  log "\n${GREEN}==>${NC} $label"
  cd "$project_dir" || fail "cannot cd to $project_dir"

  if [[ -d node_modules/spotcharge-types ]]; then
    log "  removing node_modules/spotcharge-types"
    rm -rf node_modules/spotcharge-types
  fi

  log "  installing spotcharge-types@${TYPES_VERSION} (${TYPES_SPEC})"

  if npm install "$TYPES_SPEC"; then
    log "  ${GREEN}ok${NC} (standard install)"
    return 0
  fi

  log "  ${YELLOW}retrying with --legacy-peer-deps${NC}"
  if npm install --legacy-peer-deps "$TYPES_SPEC"; then
    log "  ${GREEN}ok${NC} (legacy peer deps)"
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
  local target rel_path project_dir label

  for target in "${TARGETS[@]}"; do
    rel_path="$target"
    project_dir="$PROJECTS_ROOT/$rel_path"
    label="$rel_path"
    install_types_in "$project_dir" "$label" || failed=$((failed + 1))
  done

  log ""
  if [[ "$failed" -gt 0 ]]; then
    fail "$failed project(s) failed to install spotcharge-types"
  fi

  log "${GREEN}Done.${NC} spotcharge-types@${TYPES_VERSION} synced to all targets."
}

main "$@"
