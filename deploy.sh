#!/bin/bash

echo "🚀 Building Shower Reseal Website for Production..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful! Production files created in 'dist' folder."
    
    # Preview the build
    echo "🌐 Starting preview server..."
    echo "📱 Your website is now available at: http://localhost:4173"
    echo "🔄 Press Ctrl+C to stop the preview server"
    
    # Start preview server
    npm run preview
else
    echo "❌ Build failed! Please check for errors above."
    exit 1
fi
