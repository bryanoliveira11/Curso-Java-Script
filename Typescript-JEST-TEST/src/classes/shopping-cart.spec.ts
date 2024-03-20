import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';
import { ShoppingCart } from './shopping-cart';

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(
      public name: string,
      public price: number,
    ) {}
  }
  return new CartItemMock(name, price);
};

const createSutAndItems = () => {
  const { sut, discountMock } = createSut();
  sut.addItem(createCartItem('test-item', 10));
  sut.addItem(createCartItem('test-item2', 20));
  return { sut, discountMock };
};

describe('Shopping Cart', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be an empty cart when there is no product', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it('should have 2 cart items', () => {
    const { sut } = createSutAndItems();
    expect(sut.items.length).toBe(2);
  });

  it('should test total and total with discount', () => {
    const { sut } = createSutAndItems();
    expect(sut.total()).toBe(30);
    expect(sut.totalWithDiscount()).toBe(30);
  });

  it('should add items and clean the cart', () => {
    const { sut } = createSutAndItems();
    expect(sut.items.length).toBe(2);
    sut.clear();
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('should remove items', () => {
    const { sut } = createSutAndItems();
    expect(sut.items.length).toBe(2);
    sut.removeItem(1);
    expect(sut.items.length).toBe(1);
  });

  it('should call discount.calculate once when totalWithDiscount is called', () => {
    const { sut, discountMock } = createSutAndItems();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDiscount();
    expect(discountMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should call discount.calculate with total price when totalWithDiscount is called', () => {
    const { sut, discountMock } = createSutAndItems();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDiscount();
    expect(discountMockSpy).toHaveBeenCalledWith(30);
  });
});
