/* function overload */

type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...args: number[]): number;
};

/* function overload - a function behaves differently based on the parameters */
const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0)
    // sum every arg and sum with x and y if y exists
    return args.reduce((sum, value) => (sum += value), 0) + x + (y || 0);

  return x + (y || 0);
};

console.log(adder(1)); // -> returns 1;
console.log(adder(1, 3)); // -> returns 4;
console.log(adder(1, 2, 3)); // -> returns 6;
