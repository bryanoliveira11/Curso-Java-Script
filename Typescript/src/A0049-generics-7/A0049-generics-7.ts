/* generic types 7 - type predicate  */

export function isNumber(value: unknown): value is number {
  return typeof value === 'number'; // -> typeguard
}

console.log(isNumber('123'));
console.log(isNumber(123));

export function sum<T>(...args: T[]): number {
  const sum = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      /* Operator '+' cannot be applied to types 'number' and 'T' */
      return sum + value;
    }
    return sum;
  }, 0);

  return sum;
}

console.log(sum(1, 2, 3));
console.log(sum('a', 'b', 'c'));

/*  Argument of type 'string' is not assignable to parameter of type 'number'. */
// console.log(sum(1, 2, 3, 'a'));

console.log(sum<string | number>(...[1, 2, 3, 'a', 'b', 'c', 1]));
