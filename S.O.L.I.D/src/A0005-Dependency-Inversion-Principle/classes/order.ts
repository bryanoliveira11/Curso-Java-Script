import { OrderStatus } from './interfaces/order-status';
import { CustomerOrder } from './interfaces/customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { MessagingProtocol } from './interfaces/messaging-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly shoppingCart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
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
