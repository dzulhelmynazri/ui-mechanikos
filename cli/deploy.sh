#!/bin/bash

# Build the CLI
echo "Building CLI..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "Build failed!"
    exit 1
fi

# Make the CLI executable
chmod +x dist/index.js

echo "Build successful!"
echo "To publish to npm:"
echo "1. cd cli"
echo "2. npm login"
echo "3. npm publish" 