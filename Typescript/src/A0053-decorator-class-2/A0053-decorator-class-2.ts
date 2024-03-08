/* decorator class */

function reverseNameAndColor<T extends new (...args: any[]) => any>(
  target: T,
): T {
  // this will be called
  console.log(`im the decorator ${target}`);

  return class extends target {
    name: string;
    color: string;

    constructor(...args: any[]) {
      super(...args);
      this.name = this.reverse(args[0]);
      this.color = this.reverse(args[1]);
    }

    reverse(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

@reverseNameAndColor
export class Animal {
  constructor(
    public name: string,
    public color: string,
  ) {
    // this will not be called
    console.log('im the class');
  }
}

// const animal = new Animal('the name', 'brown');
// console.log(animal);
