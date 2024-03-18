/*
Interface Segregation Principle
"clients should not be forced to rely on methods they do not use"
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { NoDiscount } from './classes/discount';

// const fiftypercentdiscount = new FiftyPercentDiscount();
// const tenpercentdiscount = new TenPercentDiscount();
const nodiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(nodiscount);
const messaging = new Messaging();
const persisntecy = new Persistency();

const order = new Order(shoppingCart, messaging, persisntecy);

shoppingCart.addItem(new Product('p1', 10));
shoppingCart.addItem(new Product('p2', 20));
shoppingCart.addItem(new Product('p3', 30));
console.log(shoppingCart, order.orderStatus);
console.log(shoppingCart.total(), shoppingCart.totalWithDiscount());
order.checkout();
console.log(shoppingCart, order.orderStatus);
