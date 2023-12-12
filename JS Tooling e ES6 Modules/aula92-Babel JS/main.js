// Babel js converts code to make it functional on older browsers

const nome = 'name';
const obj = {nome};
const newObj = {...obj};
console.log(newObj);

class Person {
    constructor(name, lastname) {
        this.name = name,
        this.lastname = lastname
    }
}

// command to convert code => npx babel main.js -o bundle.js --presets=@babel/env