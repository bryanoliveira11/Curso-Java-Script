/* eslint-disable */

/* unknown - a more secure any */
let x: unknown;
x = 100;
x = 'string';
x = 900;
x = '10';
const y = 800;

/* typescript does not let you do this */
console.log (x + y);

/* need to check the type */
if (typeof x === 'number') console.log(x + y)
