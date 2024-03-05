/* generic types 5 - classes */

export class Person<T, U> {
  constructor(
    public name: T,
    public age: U,
  ) {}
}

export class Stack<T> {
  private counter = 0;
  private elements: { [k: number]: T } = {};

  push(element: T): void {
    this.elements[this.counter] = element;
    this.counter++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;
    this.counter--;
    const element = this.elements[this.counter];
    delete this.elements[this.counter];
    return element;
  }

  isEmpty(): boolean {
    return this.counter === 0;
  }

  length(): number {
    return this.counter;
  }

  showStack(): void {
    for (const element in this.elements) {
      console.log(this.elements[element]);
    }
  }
}

/* the types where unknown in this case, it needs the <number> */
const stack = new Stack<number>();
stack.push(2);
stack.push(5);
stack.push(7);
stack.push(9);

while (!stack.isEmpty()) {
  console.log(stack.pop());
}

// const p1 = new Person('name', 20);
// const p2 = new Person(['name'], 20);
// const p3 = new Person(['name'], { age: 20 });
