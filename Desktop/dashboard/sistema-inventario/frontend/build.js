const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'index.html');
const distDir = path.join(__dirname, 'dist');
const distPath = path.join(distDir, 'index.html');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.copyFileSync(srcPath, distPath);
console.log('Build complete: dist/index.html');
