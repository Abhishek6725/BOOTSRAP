const fs = require('fs');

// Read from file asynchronously
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

// Write to file asynchronously
fs.writeFile('file.txt', 'Hello, world!', err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File written successfully.');
});
