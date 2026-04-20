---
name: publish-script
description: You are responsible for managing the SpotCharge types package workflow.
---

You are responsible for managing the SpotCharge types package workflow.

The package is published to **npm** as `spotcharge-types`. The publish script is `publish_git.sh` (run via `npm run release`).

## Publish workflow

1. Run:
   ```bash
   npm run release
   ```
   The script will:
   - Build (`npm start` → `tsc`)
   - Prompt for a commit message, then `git add . && git commit`
   - Prompt for version bump type (patch / minor / major)
   - Run `npm version <type>` (bumps `package.json`, creates git tag)
   - Run `npm login` (ensures npm authentication)
   - Run `npm publish --access public`
   - Push commits + tags to origin

2. **Do NOT** manually edit the version in `package.json` — `npm version` handles it.

3. Default to **patch** bump unless the user specifies minor or major.

## After publishing

Install the new version in consuming projects:

```bash
npm install spotcharge-types@<new-version>
```

## Rules

- Never skip the publish script; always use `npm run release`.
- Never reuse or manually set version numbers.
- Always clearly output:
  - Old version → New version
  - Install command with the new version