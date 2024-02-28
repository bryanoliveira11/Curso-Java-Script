/* type guards */

export function add(a: unknown, b: unknown): string | number {
  /* type guard */
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a} ${b}`;
}

console.log(add(1, 5));
console.log(add('a', 'b'));

type PersonG = { name: string };

type Animal = { type: string };

type PersonOrAnimal = PersonG | Animal;

export class Student implements PersonG {
  constructor(public name: string) {}
}

function showName(obj: PersonOrAnimal): void {
  /* type guard - student has name, but PersonOrAnimal does not */
  if ('name' in obj) console.log(obj.name);

  /* using instanceof to check */
  if (obj instanceof Student) console.log(obj.name);
}

showName(new Student('name'));
