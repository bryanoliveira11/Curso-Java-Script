/* decorator class 3 - decorator factories */

/*
 this function returns a anonymous function, which is the decorator now
 this way you can pass params to it and use in the decorator
 */
function reverseNameAndColor(param1: string, param2: string) {
  // closure
  return function <T extends new (...args: any[]) => any>(target: T): T {
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

@reverseNameAndColor('param1', 'param2')
export class Animal {
  constructor(
    public name: string,
    public color: string,
  ) {}
}

const animal = new Animal('the name', 'brown');
console.log(animal);
