const fs = require('fs');
fs.copyFile('file.txt' , 'file copy.txt' , (err) => {
if (err) {
    throw err;
}
console.log('File is copied!');
});
