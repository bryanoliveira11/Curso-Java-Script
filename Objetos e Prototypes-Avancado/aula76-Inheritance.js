// prototypes inheritance
function Product(name, price) {
    this.name = name,
        this.price = price
}

Product.prototype.raise = function (value) {
    this.price += value;
}

Product.prototype.discount = function (value) {
    this.price -= value;
}

// Shirt.prototype is != Product.prototype
function Shirt(name, price, color) {
    Product.call(this, name, price);
    this.color = color
}
// setting prototype
// Shirt.prototype.constructor is === Product.prototype.constructor
Shirt.prototype = Object.create(Product.prototype);

// changing the constructor
Shirt.prototype.constructor = Shirt;

const product = new Product('generic', 15);
const shirt = new Shirt('shirt1', 30, 'black');
shirt.raise(10);
console.log(product);
console.log(shirt);

function Cup(name, price, material, stock) {
    Product.call(this, name, price);
    this.material = material
    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: false,

        get: function () {
            return stock;
        },
        set: function (value) {
            if (typeof (value) != 'number') return;
            stock = value;
        }
    })
}
Cup.prototype = Object.create(Product.prototype);
Cup.prototype.constructor = Cup;

const cup = new Cup('cup1', 50, 'glass', 5);
cup.discount(10);
console.log(cup);