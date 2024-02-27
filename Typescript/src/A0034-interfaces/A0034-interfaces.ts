/* interfaces */

interface TypeName {
  name: string;
}

interface TypeLastName {
  lastname: string;
}

interface TypeFullName {
  fullName(): string;
}

type PersonType = TypeName & TypeLastName & TypeFullName;

/* extending interfaces */
interface PersonType2 extends TypeName, TypeLastName, TypeFullName {}

export class Person implements PersonType2 {
  constructor(
    public name: string,
    public lastname: string,
  ) {}

  fullName(): string {
    return this.name + ' ' + this.lastname;
  }
}

const p1 = new Person('name', 'lastname');
console.log(p1.fullName());
