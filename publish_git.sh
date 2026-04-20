#!/bin/bash
set -e

# Build
echo "Building..."
npm start

# Ask the user for the commit message
echo "Please enter your commit message:"
read commit_message

# Commit changes
git add .
git commit -m "$commit_message"

# Ask the user for the version bump type
echo "Select version bump type:"
select version_type in "patch" "minor" "major"; do
    if [ -n "$version_type" ]; then
        break
    fi
    echo "Please choose a valid option."
done

# Bump version (creates git tag automatically)
npm version "$version_type" -m "v%s - $commit_message"

# Ensure npm is authenticated
echo "Logging in to npm..."
npm login

# Publish to npm
echo "Publishing to npm..."
npm publish --access public

# Push commits and tags to origin
current_branch=$(git branch --show-current)
echo "Pushing branch '$current_branch' and tags to origin..."
git push origin "$current_branch" --follow-tags

echo "Published to npm and pushed to origin successfully."
