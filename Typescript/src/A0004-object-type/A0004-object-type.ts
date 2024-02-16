/* eslint-disable */

/* typescript does an automatic inference of types */
const objectA = {
  keyA: 'value A',
  keyB: 'value B',
};

objectA.keyA = 'new value' // CAN do this
objectA.keyC = 'new key' // CAN'T do this

/* manual inference of types */
const objectB: {
  keyA: string;
  readonly keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'value A',
  keyB: 'value B',
};

objectB.keyA = 'new value';
objectB.keyC = 'new key';
objectB.keyD = 'new key 2';

console.log(objectB.keyA, objectB.keyC, objectB.keyD);
