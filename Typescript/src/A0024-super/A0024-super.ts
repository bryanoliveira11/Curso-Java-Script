/* ts super class */

/* person is a Super Class */
export class Person {
  constructor(
    public name: string,
    public lastname: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getFullName(): string {
    return `${this.name} ${this.lastname}`;
  }
}

/* this is a Sub Class */
export class Student extends Person {
  /*
  overwriting the constructor
  don't need to use public or private here, unless you're creating a new attribute like "studentClass"
  */
  constructor(
    name: string,
    lastname: string,
    age: number,
    cpf: string,
    public studentClass: string,
  ) {
    super(name, lastname, age, cpf);
  }
}

/* this is a Sub Class */
export class Customer extends Person {
  // overwriting the function to do other things while doing the initial thing. calling super
  getFullName(): string {
    console.log('Customer - something before the super'); // -> doing other thing with the function
    return super.getFullName(); // -> doing the initial role of the function at Person class
  }
}

const cl1 = new Customer('name1', 'last1', 20, '111.111.111-11');
console.log(cl1.getFullName());

const sl1 = new Student(
  'name2',
  'last2',
  20,
  '222.222.222-22',
  'new attribute',
);
console.log(sl1);
