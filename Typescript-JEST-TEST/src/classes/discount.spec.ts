import { Discount } from './discount';

const createSut = () => {
  return new Discount();
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
