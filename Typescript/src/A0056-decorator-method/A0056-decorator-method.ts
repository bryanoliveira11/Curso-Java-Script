/* method decorator */

function decorator(
  classPrototype: unknown,
  nameMethod: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor {
  console.log(classPrototype, nameMethod, descriptor);
  return {
    // changing the descriptor
    value: function (...args: string[]) {
      return args[0].toUpperCase();
    },
  };
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

  @decorator
  method(msg: string): string {
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
