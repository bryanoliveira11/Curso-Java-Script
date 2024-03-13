/* Shopping Cart Without SRP */

type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  total(): number {
    return +this._items
      .reduce((value, next) => value + next.price, 0)
      .toFixed(2);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log(msg);
  }

  saveOrder(): void {
    console.log('Order Saved.');
  }

  clear(): void {
    this._items.length = 0;
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Your Cart is Empty.');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(
      `Your Order with a total of ${this.total()}$ was Received.`,
    );
    this.saveOrder();
    this.clear();
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'p1', price: 10 });
shoppingCart.addItem({ name: 'p2', price: 20 });
shoppingCart.addItem({ name: 'p3', price: 30 });
shoppingCart.removeItem(1);
console.log(shoppingCart);
shoppingCart.checkout();
console.log(shoppingCart);
