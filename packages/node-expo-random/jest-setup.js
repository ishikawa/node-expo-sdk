/*
 * This file is intended to be specified in `setupFilesAfterEnv` in Jest configuration.
 *
 *   setupFilesAfterEnv: [
 *    'node-expo-random/jest-setup.js',
 *   ]
 *
 * See the Jest documentation at https://jestjs.io/docs/en/configuration#setupfilesafterenv-array for
 * more details.
 */
jest.mock('expo-random/build/ExpoRandom', () => ({
  getRandomBytes: jest.fn(byteCount => {
    const random = require('./dist/index');
    return random.getRandomBytes(byteCount);
  }),
  getRandomBytesAsync: jest.fn(byteCount => {
    const random = require('./dist/index');
    return random.getRandomBytesAsync(byteCount);
  })
}));
