/* static attributes and methods */

export class Person {
  /* static attribute */
  static defaultAge = 0;
  static defaultCpf = '000.000.000-00';

  constructor(
    public name: string,
    public lastname: string,
    public age: number,
    public cpf: string,
  ) {}

  /* static method */
  static createPerson(name: string, lastname: string): Person {
    return new Person(name, lastname, this.defaultAge, this.defaultCpf);
  }

  /* common method to access static attributes in a class instance */
  commonMethod(): void {
    console.log(Person.defaultAge, Person.defaultCpf);
  }
}

const p1 = new Person('name1', 'last1', 20, '111.111.111-11');
//console.log(p1.cpf);

/* static methods can be used without a class instance */
console.log(Person.createPerson('name', 'lastname'));

p1.commonMethod();
