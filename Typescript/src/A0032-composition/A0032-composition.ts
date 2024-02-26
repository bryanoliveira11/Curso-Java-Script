/* class composition */

export class Car {
  private readonly engine: Engine = new Engine();

  /* the Car methods calls the Engine methods */
  turnOn() {
    this.engine.turnOn();
  }

  speedUp() {
    this.engine.speedUp();
  }

  speedDown() {
    this.engine.speedDown();
  }
}

export class Engine {
  turnOn() {
    console.log(this, '- Engine is On.');
  }

  speedUp() {
    console.log(this, '- Speeding Up.');
  }

  speedDown() {
    console.log(this, '- Speeding Down.');
  }
}

const car = new Car();
car.turnOn();
car.speedUp();
car.speedDown();
