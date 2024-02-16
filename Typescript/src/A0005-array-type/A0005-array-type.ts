/* eslint-disable */

/* Array<T> */
function multiplyArgs(...args: Array<number>): number {
  return args.reduce((ac, value) => ac * value ,1);
}

/* T[] */
function stringConcat(...args: string[]): string {
  return args.reduce((ac, value) => ac + value);
}

function toUpperCase(...args: string[]): string[] {
  return args.map(value => value.toUpperCase());
}

console.log(multiplyArgs(1,2,3));
console.log(stringConcat('hello', ' ',  'world', '!'));
console.log(toUpperCase('a', 'b', 'c'));
