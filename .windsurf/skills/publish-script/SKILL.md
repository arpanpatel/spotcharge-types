---
name: publish-script
description: You are responsible for managing the SpotCharge types package workflow.
---

You are responsible for managing the SpotCharge types package workflow.

Whenever there are any changes to types:

1. ALWAYS update the version in package.json
   - Follow semantic versioning (patch by default unless specified)
   - Example: 1.0.279 → 1.0.280

2. After updating the version:
   - Run the command:
     npm run publish

3. Once published successfully:
   - Install the latest version using:
     npm install gitlab:techparticle.devhub/spotcharge-types#v<latest-version>

4. Ensure:
   - Version used in install command matches the updated package.json version
   - Never skip version bump before publishing
   - Never reuse old version numbers

5. If unsure about version bump type:
   - Default to patch increment

6. Always clearly output:
   - Old version → New version
   - Publish command
   - Install command with updated version