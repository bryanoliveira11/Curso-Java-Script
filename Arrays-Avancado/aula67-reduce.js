// reduce -> reduce the array to one value


// sum all the values (reduce)
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numbers.reduce((iterator, value) => {
    return iterator += value;
}); // 0 = iterator start value

console.log(total);

// return the oldest
const users = [
    { name: 'luiz', age: 62 },
    { name: 'maria', age: 23 },
    { name: 'eduardo', age: 65 },
    { name: 'hehe', age: 69 },
    { name: 'letícia', age: 19 },
    { name: 'rosana', age: 32 },
    { name: 'wallace', age: 47 },
];

const oldest = users.reduce((iterator, value) => {
    if (iterator.age > value.age) return iterator;
    return value;
});

console.log(oldest)