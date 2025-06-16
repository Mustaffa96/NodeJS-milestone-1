const fs = require('fs');
const path = require('path');

// Writing to a file
const content = 'Hello Node.js!\nThis is a file I/O example.';
fs.writeFileSync('example.txt', content);
console.log('File written successfully');

// Reading from a file
try {
    const data = fs.readFileSync('example.txt', 'utf8');
    console.log('File contents:', data);
} catch (err) {
    console.error('Error reading file:', err);
}

// Append to file
fs.appendFileSync('example.txt', '\nThis line was appended!');
console.log('Content appended to file');

// Read directory contents
const files = fs.readdirSync(__dirname);
console.log('\nDirectory contents:');
files.forEach(file => {
    console.log(file);
});
