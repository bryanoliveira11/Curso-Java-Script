// Classes in JS
class Person {
    constructor(name, last_name) {
        this.name = name;
        this.last_name = last_name;
    }

    speak() {
        return `${this.name} is speaking.`   
    }
}

const p1 = new Person('name1', 'lastname1');
console.log(p1.speak());