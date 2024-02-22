/* getters and setters */

export class Person {
  constructor(
    private name: string,
    private lastname: string,
    private age: number,
    private _cpf: string,
  ) {
    // do this when using setters
    this.cpf = _cpf;
  }

  /* getter and setter will work as a class attribute */

  /* getter */
  get cpf(): string {
    // can change the final value in a getter
    return `${this._cpf.replace(/\D/g, '')}`;
  }

  /* setter */
  set cpf(value: string) {
    this._cpf = value;
  }
}

const p1 = new Person('name1', 'last1', 20, '111.111.111-11');
console.log(p1.cpf); // -> getter works as a normal attribute
p1.cpf = '222.222.222-22'; // -> setter called by the "=" sign
console.log(p1.cpf);
