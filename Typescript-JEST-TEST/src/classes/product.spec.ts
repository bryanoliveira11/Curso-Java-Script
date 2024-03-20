import { Product } from './product';

const createSut = (name: string, price: number) => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return undefined', () => {
    const sut = createSut('product-test', 9.9);
    expect(sut).toHaveProperty('name', 'product-test');
    expect(sut.price).toBeCloseTo(9.9);
  });
});
