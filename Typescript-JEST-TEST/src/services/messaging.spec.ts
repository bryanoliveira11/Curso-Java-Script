import { Messaging } from './messaging';

const createSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return undefined', () => {
    // System Under Test
    const sut = createSut();
    expect(sut.sendMessage('msg')).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('msg');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "msg" ', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('msg');
    expect(consoleSpy).toHaveBeenCalledWith('msg');
  });
});
