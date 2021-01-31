jest.mock('expo-crypto/build/ExpoCrypto', () => ({
  digestStringAsync: jest.fn((algorithm, data, options) => {
    const crypto = require('./index');
    return crypto.digestStringAsync(algorithm, data, options);
  })
}));
