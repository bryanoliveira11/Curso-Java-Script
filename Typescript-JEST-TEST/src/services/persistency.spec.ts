describe('testing something', () => {
  it('should return 1', () => {
    const number = 1;
    expect(number).toBe(1);
  });
});

describe('testing something 2', () => {
  test('should return my test', () => {
    const name = 'my test';
    expect(name).toBe('my test');
  });
});
