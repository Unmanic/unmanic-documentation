'use strict';

const fs = require('fs');
const path = require('path');

const guidesDir = path.join(__dirname, '..', 'docs', 'guides');
const requiredTokens = [
    'img.shields.io/badge/Difficulty',
    'img.shields.io/badge/Setup%20Time',
    'img.shields.io/badge/Original%20Author',
];

function listGuideFiles(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const files = [];

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...listGuideFiles(fullPath));
            continue;
        }
        if (/\.mdx?$/.test(entry.name)) {
            files.push(fullPath);
        }
    }

    return files;
}

if (!fs.existsSync(guidesDir)) {
    console.error(`Guides directory not found: ${guidesDir}`);
    process.exit(1);
}

const guideFiles = listGuideFiles(guidesDir);
const failures = [];

for (const filePath of guideFiles) {
    const content = fs.readFileSync(filePath, 'utf8');
    const missing = requiredTokens.filter((token) => !content.includes(token));
    if (missing.length) {
        failures.push({ filePath, missing });
    }
}

if (failures.length) {
    console.error('Guide header shield checks failed. Missing required shields:');
    for (const failure of failures) {
        const relativePath = path.relative(process.cwd(), failure.filePath);
        console.error(`- ${relativePath}`);
        for (const token of failure.missing) {
            console.error(`  - ${token}`);
        }
    }
    process.exit(1);
}

console.log(`Guide header shields OK (${guideFiles.length} files checked).`);
