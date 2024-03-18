import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { ShoppingCart } from './shopping-cart';
import { CustomerOrder } from './interfaces/customer-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open'; //

  constructor(
    private readonly shoppingCart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.shoppingCart.isEmpty()) {
      console.log('Your Cart is Empty.');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `Your Order with a total of ${this.shoppingCart.totalWithDiscount()}$ was Received.`,
    );
    this.persistency.saveOrder();
    this.shoppingCart.clear();
    console.log(
      `customer is ${this.customer.getName()} -> ${this.customer.getIDN()}`,
    );
  }
}
