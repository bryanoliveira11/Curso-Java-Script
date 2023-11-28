// defineProperty => Getters e Setters

(() => {
    function Product(name, price, stock) {
        this.name = name;
        this.price = price;

        Object.defineProperty(this, 'stock', {
            enumerable: true,
            configurable: true,
            // getter
            get: () => { return stock },
            // setter
            set: (value) => {
                if (typeof (value) !== 'number') {
                    throw new TypeError('Bad Value.');
                }
            }
        });
    }

    const p1 = new Product('Shirt', 20, 3);
    p1.stock = 'string stock ?'
    console.log(p1.stock);
})();