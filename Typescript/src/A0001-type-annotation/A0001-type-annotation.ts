/* eslint-disable */

/* Basic types */
let userName: string = 'name'; // any string '' "" ``
let userAge: number = 20; // 10, 1.2, -5.23, 0xf00d
let isLoggedIn: boolean = true; // true or false
let symbol: symbol = Symbol('any symbol'); // symbols


/* Arrays */
let numbersArray: Array<number> = [1, 2, 3, 4, 5];
let numbersArray2: number[] = [1, 2, 3, 4, 5];
let stringsArray: Array<string> = ['a', 'b', 'c'];
let stringsArray2: string[] = ['a', 'b', 'c'];

/* Objects */
let user : {name: string, age: number, adult?: boolean} = { // '?' indicates that the value is optional
  name: 'name',
  age: 20,
};

/* Functions */
function sum(x: number, y:number) {
  return x + y;
}
const result = sum(2,2); // result is a number

const sum2: (x:number, y:number) => number = (x, y) => x + y;
