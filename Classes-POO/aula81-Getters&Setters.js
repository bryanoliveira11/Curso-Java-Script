// getters e setters in js classes

// private attribute
const _speed = Symbol('speed');

class Car {
    constructor(name, speed) {
        this.name = name;
        //this.speed = 0;
        this[_speed] = 0;
    }

    // getter
    get speed() {
        return this[_speed];
    }

    // setter
    set speed(value) {
        if (typeof value !== 'number') return;
        if (value >= 100 || value <= 0) {
            console.log('Invalid Speed !');
            return;
        }
        this[_speed] = value;
    }

    speed_up() {
        if (this[_speed] >= 100) return;
        this[_speed] ++;
    }

    speed_down() {
        if (this[_speed] <= 0) return;
        this[_speed] --;
    }
}

const car1 = new Car('Beetle');

for(let i = 0; i <= 200; i++) {
    car1.speed_up();
}

car1.speed = 1000;
console.log(car1, car1.speed);