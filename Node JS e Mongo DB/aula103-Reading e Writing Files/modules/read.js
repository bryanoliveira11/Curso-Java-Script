const fs = require('fs').promises;

// readfile func
module.exports = (filePath) => fs.readFile(filePath, 'utf-8');