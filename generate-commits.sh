#!/bin/bash

# Commit modified/untracked files one by one
for file in $(git status --porcelain | awk '{print $2}'); do
    git add "$file"
    filename=$(basename "$file")
    git commit -m "chore: update $filename"
done

# Generate additional dummy commits to boost the count
echo "Generating additional commits for GitHub activity..."
for i in {1..40}; do
    echo "Activity update $i at $(date)" >> .github-activity-log
    git add .github-activity-log
    git commit -m "chore(activity): contribution log update #$i"
done

git push origin main || echo "Local commits generated. You can push them later."
