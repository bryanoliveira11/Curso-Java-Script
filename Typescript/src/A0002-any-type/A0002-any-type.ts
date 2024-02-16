/* eslint-disable */

/*
- any type indicates that the parameter or variable can be anything
- not really usefull
*/

function showMessage(msg: any) { // msg is any type
  return msg; // returns a any type
};

console.log(showMessage([1,2,3]));
console.log(showMessage('hello'));
console.log(showMessage(2));
