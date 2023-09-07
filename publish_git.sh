#!/bin/bash

echo "build:"
npm start

# Ask the user for the commit message
echo "Please enter your commit message:"
read commit_message

# Commit changes
git add .
git commit -m "$commit_message"

# Ask the user for the tag name
echo "Please enter the tag name:"
read tag_name

# Create a new tag
git tag -a $tag_name -m "$commit_message"

# Push changes and tag to remote repository
git push origin main
git push origin main --tags
