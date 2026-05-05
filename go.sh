#!/bin/bash
# Quick commit & push script for Learning Playwright Fundamentals
# Usage: ./go.sh "your commit message"
#        npm run go -- "your commit message"

set -e

COMMIT_MSG="${1:-"update: automated commit $(date +'%Y-%m-%d %H:%M:%S')"}"

echo "🔍 Checking for changes..."

if git diff --quiet && git diff --staged --quiet; then
    echo "✅ No changes to commit. Working tree is clean."
    exit 0
fi

echo "📦 Staging all changes..."
git add -A

echo "📝 Committing with message: $COMMIT_MSG"
git commit -m "$COMMIT_MSG"

echo "🚀 Pushing to origin/main..."
git push origin main

echo "✅ Done! Changes pushed successfully."
