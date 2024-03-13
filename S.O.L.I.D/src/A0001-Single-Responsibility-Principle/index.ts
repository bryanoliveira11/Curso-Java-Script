import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persisntecy = new Persistency();

const order = new Order(shoppingCart, messaging, persisntecy);

shoppingCart.addItem(new Product('p1', 10));
shoppingCart.addItem(new Product('p2', 20));
shoppingCart.addItem(new Product('p3', 30));
shoppingCart.removeItem(1);
console.log(shoppingCart, order.orderStatus);
order.checkout();
console.log(shoppingCart, order.orderStatus);
