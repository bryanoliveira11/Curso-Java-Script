const fs = require('fs').promises;

// write file func
module.exports = (path, data) => {
    fs.writeFile(path, data, { flag: 'w' });
};
