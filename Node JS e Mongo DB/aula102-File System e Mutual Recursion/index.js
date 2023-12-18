// File System
const fs = require('fs').promises;

// Path
const path = require('path');

// reading dirs
async function readdir(root_Dir) {
    if (!root_Dir) throw new Error('Invalid Path !');

    try {
        root_Dir = path.resolve(root_Dir);
        const files = await fs.readdir(root_Dir);
        walk(files, root_Dir);
    }
    catch (err) { console.log(err) };
}

async function walk(files, root_Dir) {
    for (const file of files) {
        // getting the path of the files
        const fileFullPath = path.resolve(root_Dir, file);
        
        // getting stats of the files
        const stats = await fs.stat(fileFullPath);

        // removing the node_modules and git dir with regex
        if (/\.git/g.test(fileFullPath)) continue;
        if (/node_modules/g.test(fileFullPath)) continue;

        // checking if the file is a dir
        if (stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }

        // getting only the .css files
        if (!/\.html/g.test(fileFullPath)) continue;

        console.log(fileFullPath, stats.isDirectory());
    }
}

readdir('./');