// defineProperty & defineProperties

(() => {
    function Product(name, price, stock) {
        //this.name = name;
        //this.price = price;
        //this.stock = stock;

        Object.defineProperty(this, 'stock', {
            // shows the key
            enumerable: true,
            // value
            value: stock,
            // value cannot be changed
            writable: false,
            // can reset the configs to this property
            configurable: true,
        });

        Object.defineProperties(this, {
            name: {
                enumerable: true,
                value: name,
                writable: false,
                configurable: true,
            },
            price: {
                enumerable: true,
                value: price,
                writable: false,
                configurable: true,
            },
        });
    }

    const p1 = new Product('Shirt', 20, 3);
    console.log(p1.name);
    console.log(p1.price);
    console.log(p1.stock);
    console.log(Object.keys(p1));
})();

