// new Object -> Object.prototype
const objA = {
    keyA: 'A',
    // __proto__ : Object.prototype
};

const objB = {
    keyB: 'B',
    // __proto__ : objA
};

const objC = new Object();
objC.keyC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
// console.log(objB.keyA);

// objC has A, B and C keys
// console.log(objC.keyA);
// console.log(objC.keyB);
// console.log(objC.keyC);

function Product(name, price) {
    this.name = name,
    this.price = price
}

Product.prototype.discount = function(percentage)  {
    this.price = this.price - (this.price * (percentage / 100));
}

Product.prototype.raise = function(percentage) {
    this.price = this.price + (this.price * (percentage / 100));
}

const p1 = new Product('shirt', 50);
//p1.discount(100);
p1.raise(100);
console.log(p1);

// Literal
const p2 = {
    name: 'cup',
    price: 15
}

// setting the prototype
Object.setPrototypeOf(p2, Product.prototype);
p2.discount(100);
console.log(p2);


// Object.create
const p3 = Object.create(Product.prototype, {
    price: {writable:true, configurable:true, enumerable:true, value:42},
})

p3.raise(10);
console.log(p3);