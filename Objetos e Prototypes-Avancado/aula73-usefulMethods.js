const product = { name: 'product', price: 1.8 };

// spread operator "..." copies the product object istead of reference it
const cup = {
    ...product,
    material: 'glass',
};
cup.name = 'Cup';

// Object.assign() => copy an object to another
const shirt = Object.assign({}, product, {
    name : 'Shirt',
    material : 'cottom',
});

console.log(product, cup, shirt);

// Object.getOwnPropertyDescriptor() => shows the property of the object
console.log(Object.getOwnPropertyDescriptor(product, 'name'));

// Object.values() => shows the object values
console.log(Object.values(product));

// Object.entries() => returns key and value from the object inside an array
console.log(Object.entries(product));