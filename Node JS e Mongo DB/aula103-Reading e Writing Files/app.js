const write = require('./modules/write');
const read = require('./modules/read');

const path = require('path');
const filePath = path.resolve(__dirname, 'test.json');

const people = [
    { name: 'name1' },
    { name: 'name2' },
    { name: 'name3' },
    { name: 'name4' },
    { name: 'name5' },
];
const json = JSON.stringify(people, '', 2);

write(filePath, json);

async function readFile(filepath) {
    const data = await read(filepath);
    getData(data);
}

function getData(data) {
    data = JSON.parse(data);
    for (const val of data) console.log(val);
}

readFile(filePath);