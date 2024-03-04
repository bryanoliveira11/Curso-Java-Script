/* generic types 3 - interfaces e type alias */

/* can send default values */
interface PersonProtocol<T = string, U = number> {
  name: T;
  lastname: T;
  age: U;
}

/* passing the types for T and U */
const student1: PersonProtocol<string, number> = {
  name: 'st1',
  lastname: 'st1',
  age: 14,
};

console.log(student1);

const student2: PersonProtocol<number, number> = {
  name: 123,
  lastname: 1234,
  age: 14,
};

console.log(student2);

/* will assume the default values for types */
const student3: PersonProtocol = {
  name: '123',
  lastname: '1234',
  age: 14,
};

console.log(student3);
