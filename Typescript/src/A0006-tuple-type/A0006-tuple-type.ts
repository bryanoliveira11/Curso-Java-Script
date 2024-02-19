/* eslint-disable */

const data: [number, string] = [1, 'a'];
data[0] = 3;

/* immutable with readonly */
const data2: readonly [number, string, string] = [2, 'a', 'b'];

/* ? - optional */
const data3: [number, string, string?] = [2, 'a', 'b'];

/* ... operator */
const data4: [number, string, ...string[]] = [2, 'a', 'b', 'c', 'd'];

console.log(data);
