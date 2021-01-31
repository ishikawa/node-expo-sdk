// This file intended to be specified in `setupFilesAfterEnv` in Jest configuration.
//
//   setupFilesAfterEnv: [
//    'node-expo-random/jest-setup.js',
//   ]
//
// FIXME: This file does not work as expected. Even though I specified the file in
// the configuration, the test did not pass. 🤨
jest.mock('expo-random/build/ExpoRandom', () => ({
  getRandomBytes: jest.fn(byteCount => {
    const random = require('node-expo-random');
    return random.getRandomBytes(byteCount);
  }),
  getRandomBytesAsync: jest.fn(byteCount => {
    const random = require('node-expo-random');
    return random.getRandomBytesAsync(byteCount);
  })
}));
