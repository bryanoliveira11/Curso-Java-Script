/* implementing type alias */

/* type - interface */
type PersonType = {
  name: string;
  lastname: string;
  fullName(): string;
};

export class Person implements PersonType {
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
