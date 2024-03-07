/* generic types 8 - utility types  */

// Record -> key and value
const obj1: Record<string, string | number> = {
  name: 'name',
  lastname: 'lastname',
  age: 20,
};
console.log(obj1);

// here the values are optional
export type PersonProtocol = {
  name?: string;
  lastname?: string;
  age?: number;
};

// Required -> values will become required
type PersonRequired = Required<PersonProtocol>;

// Partial -> values will become optional
type PersonPartial = Partial<PersonProtocol>;

// Readonly -> values will become read only
type PersonReadOnly = Readonly<PersonProtocol>;

// Pick -> you can choose the values that you want
type PersonPick = Pick<PersonRequired, 'name' | 'lastname'>;

const obj2: PersonRequired = {
  name: 'name',
  lastname: 'lastname',
  age: 111,
};
console.log(obj2);

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type TypeExclude = Exclude<ABC, CDE>; // -> will exclude types that are in both types, return is A | B

type TypeExtract = Extract<ABC, CDE>; // -> will extract types that are in both types, return is C
