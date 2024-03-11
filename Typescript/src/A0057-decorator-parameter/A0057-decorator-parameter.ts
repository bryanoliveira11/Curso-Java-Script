/* parameter decorator */

// you can't change anything, you're only watching the values
function decorator(
  classPrototype: unknown,
  nameMethod: string | symbol,
  index: number,
): void {
  console.log(classPrototype, nameMethod, index);
}

export class APerson {
  name: string;
  lastname: string;
  age: number;

  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  // decorating the parameter
  method(@decorator msg: string): string {
    return `${this.name} ${this.lastname} : ${msg}`;
  }

  get fullName(): string {
    return `${this.name} ${this.lastname}`;
  }

  set fullName(value: string) {
    const words = value.split(/\s+/g);
    const firstname = words.shift();
    if (!firstname) return;
    this.name = firstname;
    this.lastname = words.join(' ');
  }
}

const p1 = new APerson('p', '1', 20);
console.log(p1.method('msg'));
