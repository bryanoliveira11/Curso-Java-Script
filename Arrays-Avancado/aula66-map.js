// array map, map returns and changes the same array

// double the numbers
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const double = numbers.map(value => value * 2);

console.log(double);

// return only a string with the person name
// remove the key name from object
// add a id key in each object
const users = [
    { name: 'luiz', age: 62 },
    { name: 'maria', age: 23 },
    { name: 'eduardo', age: 65 },
    { name: 'letícia', age: 19 },
    { name: 'rosana', age: 32 },
    { name: 'wallace', age: 47 },
];

const pName = users.map(obj => obj.name);
console.log(pName);

const noName = users.map(obj => ({age:obj.age}));
console.log(noName);

const addID = users.map((obj, index) => {
    // using JSON to create a copy of the original obj instead of editing the original one
    const new_users = JSON.parse(JSON.stringify(obj));
    new_users.ID = (index + 1) * 1000;
    return new_users;
});
console.log(addID, users);