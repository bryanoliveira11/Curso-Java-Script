/* eslint-disable */

/* undefined */
let x;

if (typeof x === 'undefined') x = 20;

console.log(x * 2);

export function createPerson(firstName:string, lastName?: string): {
  firstName: string;
  lastName?: string;
} {
  return {firstName, lastName};
}

/* null */
export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;

  return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

/* returns 4 and null */
console.log(squareOfTwoNumber, squareOfTwoString);

if (squareOfTwoNumber === null) {
  console.log('Inválid Number.');
}
else {
  console.log(squareOfTwoNumber * 100);
}
