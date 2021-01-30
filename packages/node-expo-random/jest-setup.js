jest.mock('expo-random/build/ExpoRandom', () => ({
  getRandomBytes: jest.fn(byteCount => {
    const random = require('./index');
    return random.getRandomBytes(byteCount);
  }),
  getRandomBytesAsync: jest.fn(byteCount => {
    const random = require('./index');
    return random.getRandomBytesAsync(byteCount);
  })
}));
