/* class aggregation */

export class Product {
  constructor(
    public name: string,
    public price: number,
  ) {}
}

/* ShoppingCart needs Product */
export class ShoppingCart {
  private readonly products: Product[] = [];

  pushProducts(...product: Product[]): void {
    product.forEach((item) => {
      this.products.push(item);
    });
  }

  showCartLenght(): number {
    return this.products.length;
  }

  totalPrice(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }
}

const p1 = new Product('p1', 10);
const p2 = new Product('p2', 20);
const p3 = new Product('p3', 30);

const cart = new ShoppingCart();
cart.pushProducts(p1, p2, p3);
console.log(cart, cart.showCartLenght(), cart.totalPrice());
