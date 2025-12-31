/**
 * Hostinger Deployment Script
 * 
 * This script builds the React app and pushes only the built files
 * to the 'hostinger' branch for deployment.
 * 
 * Usage: npm run deploy:hostinger
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const BUILD_DIR = 'build';
const DEPLOY_BRANCH = 'hostinger';
const TEMP_DIR = '.deploy-temp';

// Store original directory
const PROJECT_ROOT = process.cwd();

// Helper to run commands
function run(cmd, options = {}) {
    console.log(`\n> ${cmd}`);
    try {
        execSync(cmd, { stdio: 'inherit', cwd: PROJECT_ROOT, ...options });
    } catch (error) {
        console.error(`Command failed: ${cmd}`);
        process.exit(1);
    }
}

// Helper to run commands and get output
function runOutput(cmd) {
    try {
        return execSync(cmd, { encoding: 'utf8', cwd: PROJECT_ROOT }).trim();
    } catch {
        return '';
    }
}

// Copy directory recursively
function copyDir(src, dest) {
    fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

// Remove directory recursively
function removeDir(dir) {
    if (fs.existsSync(dir)) {
        fs.rmSync(dir, { recursive: true, force: true });
    }
}

console.log('╔════════════════════════════════════════════╗');
console.log('║  Krinok Hostinger Deployment Script        ║');
console.log('╚════════════════════════════════════════════╝\n');

// Step 1: Check we're in the right directory
if (!fs.existsSync('package.json')) {
    console.error('Error: package.json not found. Run this from the project root.');
    process.exit(1);
}

// Step 2: Get remote URL
const remoteUrl = runOutput('git remote get-url origin');
if (!remoteUrl) {
    console.error('Error: No git remote found.');
    process.exit(1);
}
console.log(`📍 Remote: ${remoteUrl}`);

// Step 3: Build the project
console.log('\n🔨 Step 1/4: Building production bundle...');
run('npm run build');

// Verify build exists
const buildPath = path.join(PROJECT_ROOT, BUILD_DIR);
const indexPath = path.join(buildPath, 'index.html');
if (!fs.existsSync(buildPath) || !fs.existsSync(indexPath)) {
    console.error('Error: Build failed - no index.html found in build/');
    process.exit(1);
}
console.log('✅ Build successful!');

// Step 4: Prepare temp directory
console.log('\n📁 Step 2/4: Preparing deployment files...');
const tempPath = path.join(PROJECT_ROOT, TEMP_DIR);
removeDir(tempPath);
fs.mkdirSync(tempPath);

// Copy build contents to temp
copyDir(buildPath, tempPath);
console.log('   Files copied to temp directory');

// Step 5: Initialize git in temp and commit
console.log('\n🔧 Step 3/4: Committing build to hostinger branch...');

// Run git commands in temp directory
execSync('git init', { cwd: tempPath, stdio: 'inherit' });
execSync(`git checkout -b ${DEPLOY_BRANCH}`, { cwd: tempPath, stdio: 'inherit' });
execSync('git add -A', { cwd: tempPath, stdio: 'inherit' });

const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
execSync(`git commit -m "Deploy: ${timestamp}"`, { cwd: tempPath, stdio: 'inherit' });

// Step 6: Force push to hostinger branch
console.log('\n🚀 Step 4/4: Pushing to hostinger branch...');
execSync(`git push "${remoteUrl}" ${DEPLOY_BRANCH} --force`, { cwd: tempPath, stdio: 'inherit' });

// Cleanup
removeDir(tempPath);

console.log('\n╔════════════════════════════════════════════╗');
console.log('║  ✅ Deployment Complete!                   ║');
console.log('╚════════════════════════════════════════════╝');
console.log('\n📋 Next steps:');
console.log('   1. Go to Hostinger hPanel → Git');
console.log('   2. Delete all files in /public_html');
console.log('   3. Connect repo: ' + remoteUrl);
console.log('   4. Select branch: hostinger');
console.log('   5. Deploy to: /public_html');
console.log('\n🌐 Your site will be live at: https://www.krinok.com/\n');
