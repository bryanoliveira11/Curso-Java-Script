const speak = {
    speak() {
        console.log(`${this.name} is speaking.`);
    }
};

const personPrototype = Object.assign({}, speak);

function createPerson(name, last_name) {
    return Object.create(personPrototype, {
        name: { value: name },
        last_name: { value: last_name },
    });
};

const p1 = createPerson('name', 'last name');
console.log(p1, p1.speak());