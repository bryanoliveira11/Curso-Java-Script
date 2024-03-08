/* decorator class 4 - using two or more decorators */

type Constructor = new (...args: any[]) => any;

function reverseNameAndColor(param1: string, param2: string) {
  return function <T extends Constructor>(target: T): T {
    return class extends target {
      name: string;
      color: string;

      constructor(...args: any[]) {
        super(...args);
        this.name = this.reverse(args[0]);
        this.color = this.reverse(args[1]);
      }

      reverse(value: string): string {
        return value.split('').reverse().join('') + param1 + param2;
      }
    };
  };
}

function anotherDecorator(param1: string) {
  return function (target: Constructor) {
    console.log(`im the second decorator, ${param1}`);
    return target;
  };
}

@anotherDecorator('param1 from the 2nd decorator')
@reverseNameAndColor('param1', 'param2')
export class Animal {
  constructor(
    public name: string,
    public color: string,
  ) {}
}

const animal = new Animal('the name', 'brown');
console.log(animal);
