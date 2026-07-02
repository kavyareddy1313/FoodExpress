#!/bin/bash
git status -s | grep -v 'node_modules' | grep -v '\.env' | awk '{print $2}' | while read file; do
  if [ -f "$file" ]; then
    git add "$file"
    # Make a clean descriptive commit message based on the filename
    basename=$(basename "$file")
    git commit -m "Update $basename"
  fi
done
