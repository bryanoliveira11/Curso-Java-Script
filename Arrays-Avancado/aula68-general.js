// filter the even - filter
// double the values - map
// sum everything - reduce
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const chain = numbers.filter(value => value % 2 === 0)
    .map(value => value * 2)
    .reduce((iterator, value) => iterator += value);

console.log(chain);