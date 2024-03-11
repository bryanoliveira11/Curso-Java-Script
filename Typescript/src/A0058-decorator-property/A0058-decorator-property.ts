/* property decorator */

// you can change the values with a return
function decorator(classPrototype: unknown, nameMethod: string | symbol): any {
  let propertyValue: any;
  return {
    get: () => propertyValue,
    set: (value: any) => {
      if (typeof value === 'string') {
        propertyValue = value.split('').reverse().join('');
        return;
      }
      propertyValue = value;
    },
  };
}

export class APerson {
  @decorator
  name: string;
  @decorator
  lastname: string;
  @decorator
  age: number;

  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

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

const p1 = new APerson('name', 'lastname', 20);
console.log(p1.method('msg'));
