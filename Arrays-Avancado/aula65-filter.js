// array filter method, returns other array but with filters

// return numbers > 10
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const filteredNumbers = numbers.filter(value => value > 10);

console.log(filteredNumbers);


// return users which name is greater than or 5 chars
// return users which age is greater than 50 
// return users which name ends with an a
const users = [
    { name: 'luiz', age: 62 },
    { name: 'maria', age: 23 },
    { name: 'eduardo', age: 65 },
    { name: 'letícia', age: 19 },
    { name: 'rosana', age: 32 },
    { name: 'wallace', age: 47 },
];

const lenghtUsers = users.filter(value => value.name.length >= 5);
console.log(lenghtUsers);

const ageUsers = users.filter(value => value.age > 50);
console.log(ageUsers);

const nameEndsWithA = users.filter(value => value.name.endsWith('a'));
console.log(nameEndsWithA);