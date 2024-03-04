/* generic types 4 - constraints */

/* can't do this */
// type getKeyFn = <O, K>(object: O, key: K) => O[K];

/* constraints -> extends keyof - K is a key of O */
type getKeyFn = <O, K extends keyof O>(object: O, key: K) => O[K];

const getKey: getKeyFn = (object, key) => object[key];

export const person = {
  name: 'p1',
  addresses: ['A1', 'A2'],
};

const address = getKey(person, 'addresses');
console.log(address);
