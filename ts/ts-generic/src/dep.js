const { log } = require('console');
const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, '..', 'package.json')

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

console.log(packageJson);
