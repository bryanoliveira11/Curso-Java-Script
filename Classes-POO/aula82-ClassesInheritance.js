// Inheritance in classes
class EletronicDevice {
    constructor(name) {
        this.name = name;
        this.on = false;
    }

    turn_on() {
        if (this.on) {
            console.log(`${this.name} is Already ON.`);
            return;
        }
        this.on = true;
    }

    turn_off() {
        if (!this.on) {
            console.log(`${this.name} is Already OFF.`);
            return;
        }
        this.on = false;
    }
}

const d1 = new EletronicDevice('Smartphone');
console.log(d1.turn_on(), d1);

// Inheritance - extends
class Smartphone extends EletronicDevice {
    constructor(name, color) {
        // calling the super class
        super(name);
        this.color = color;
    }
}

const s1 = new Smartphone('Smartphone1', 'Black');
console.log(s1);