/* eslint-disable */

/* intersection types - AND  */

type HasName = {name: string};
type HasLastName = {lastname: string};
type HasAge = {age: number};
type Person = HasName & HasLastName & HasAge; // & -> and

const person: Person = {
  age: 20,
  name: 'name',
  lastname: 'lastname',
}

console.log(person);

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Intersection = AB & AC; // -> A is the intersection
