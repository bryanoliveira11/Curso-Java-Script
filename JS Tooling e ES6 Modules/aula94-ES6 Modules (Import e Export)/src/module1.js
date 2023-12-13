// direct export
export const name = 'first name';

const lastname = 'last name';
const age = 33;

function sum(x, y) {
    return x + y;
}

// exporting things
export {lastname, age, sum };

// exporting a default
export default class Person{
    constructor(name, lastname) {
        this.name = name,
        this.lastname = lastname
    }
}