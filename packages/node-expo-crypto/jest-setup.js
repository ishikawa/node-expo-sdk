// This file intended to be specified in `setupFilesAfterEnv` in Jest configuration.
//
//   setupFilesAfterEnv: [
//    'node-expo-crypto/jest-setup.js',
//   ]
//
// FIXME: This file does not work as expected. Even though I specified the file in
// the configuration, the test did not pass. 🤨
jest.mock('expo-crypto/build/ExpoCrypto', () => ({
  digestStringAsync: jest.fn((algorithm, data, options) => {
    const crypto = require('./index');
    return crypto.digestStringAsync(algorithm, data, options);
  })
}));
