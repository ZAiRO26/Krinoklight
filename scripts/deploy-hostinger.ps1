# Hostinger Deployment Script
# Usage: .\scripts\deploy-hostinger.ps1

Write-Host ""
Write-Host "╔════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║  Krinok Hostinger Deployment Script        ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

$ErrorActionPreference = "Stop"
$BUILD_DIR = "build"
$DEPLOY_BRANCH = "hostinger"
$TEMP_DIR = ".deploy-temp"

# Get remote URL
$remoteUrl = git remote get-url origin
Write-Host "📍 Remote: $remoteUrl" -ForegroundColor Green

# Step 1: Build the project
Write-Host ""
Write-Host "🔨 Step 1/4: Building production bundle..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: Build failed!" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Build successful!" -ForegroundColor Green

# Verify build
if (-not (Test-Path "$BUILD_DIR\index.html")) {
    Write-Host "Error: No index.html found in build/" -ForegroundColor Red
    exit 1
}

# Step 2: Prepare temp directory
Write-Host ""
Write-Host "📁 Step 2/4: Preparing deployment files..." -ForegroundColor Yellow
if (Test-Path $TEMP_DIR) {
    Remove-Item -Recurse -Force $TEMP_DIR
}
New-Item -ItemType Directory -Path $TEMP_DIR | Out-Null
Copy-Item -Recurse "$BUILD_DIR\*" $TEMP_DIR
Write-Host "   Files copied to temp directory" -ForegroundColor Gray

# Step 3: Initialize git and commit
Write-Host ""
Write-Host "🔧 Step 3/4: Committing build to hostinger branch..." -ForegroundColor Yellow
Push-Location $TEMP_DIR
git init
git checkout -b $DEPLOY_BRANCH
git add -A
$timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
git commit -m "Deploy: $timestamp"

# Step 4: Force push
Write-Host ""
Write-Host "🚀 Step 4/4: Pushing to hostinger branch..." -ForegroundColor Yellow
git push $remoteUrl $DEPLOY_BRANCH --force
Pop-Location

# Cleanup
Remove-Item -Recurse -Force $TEMP_DIR

Write-Host ""
Write-Host "╔════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║  ✅ Deployment Complete!                   ║" -ForegroundColor Green
Write-Host "╚════════════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next steps:" -ForegroundColor Cyan
Write-Host "   1. Go to Hostinger hPanel → Git"
Write-Host "   2. Delete all files in /public_html"
Write-Host "   3. Connect repo: $remoteUrl"
Write-Host "   4. Select branch: hostinger"
Write-Host "   5. Deploy to: /public_html"
Write-Host ""
Write-Host "🌐 Your site will be live at: https://www.krinok.com/" -ForegroundColor Cyan
Write-Host ""
