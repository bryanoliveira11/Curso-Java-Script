/* eslint-disable */

/* literal types  */

let x = 10;
x = 0b1010;

let a: 100 = 100;
// can't do this
a = 120

// do this instead - const assertion
let b = 100 as const;


const person = {
  // name is a type 'name'
  name: 'name' as const,
  // lastname is a string
  lastname: 'lastname'
};

// module mode
export default 1;
