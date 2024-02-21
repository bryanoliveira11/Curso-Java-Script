/* ts inheritance */

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

/*
inheritance with Person
Student will have everything from Person
*/
export class Student extends Person {}

/* You can overwrite methods in inheritance */
export class Customer extends Person {
  getFullName(): string {
    return 'this is a overwrited method';
  }
}

const st1 = new Student('name1', 'last1', 20, '111.111.111-11');
console.log(st1.getFullName());

const cl1 = new Customer('name2', 'last2', 30, '222.222.222-22');
console.log(cl1.getFullName());
