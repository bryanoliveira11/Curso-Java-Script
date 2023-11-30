// Prototypes

function Person(name, last_name) {
    this.name = name,
    this.last_name = last_name
    //this.fullName = () => `${this.name} ${this.last_name}`
}

// prototype - runs better than the one above
Person.prototype.fullName = function() {
    return `${this.name} ${this.last_name}`;
}

const p1 = new Person('person', 'one');
console.log(p1.fullName())