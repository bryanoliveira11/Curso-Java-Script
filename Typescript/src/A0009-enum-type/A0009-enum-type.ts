/* eslint-disable */

/* enum - typescript exclusive */

enum Colors {
  red, // 0
  blue, // 1
  yellow, // 2
  green = 10, // 10
  purple = 'purple'
}

console.log(Colors); /* -> { '0': 'red', '1': 'blue', '2': 'yellow', red: 0, blue: 1, yellow: 2 } */
console.log(Colors[0]); // -> red
console.log(Colors.blue); // -> 1

function colorChoice(color: Colors): void {
  console.log(Colors[color]);
}

colorChoice(Colors.purple);
