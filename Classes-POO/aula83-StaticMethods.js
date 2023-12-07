// static methods
const _volume = Symbol('volume');

class RemoteControl {
    constructor(tv) {
        this.tv = tv;
        this[_volume] = 0;
    }

    get volume() {
        return this[_volume];
    }

    volume_up() {
        this[_volume] += 2;
    }

    volume_down() {
        this[_volume] -= 2;
    }

    // static method
    static changeBattery() {
        console.log('changing...')
    }
}

const c1 = new RemoteControl('samsung');
c1.volume_up();
console.log(c1, c1.volume);
// static methods only work with the class, not the instance
RemoteControl.changeBattery();