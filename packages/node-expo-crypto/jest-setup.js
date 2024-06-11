/*
 * This file is intended to be specified in `setupFilesAfterEnv` in Jest configuration.
 *
 *   setupFilesAfterEnv: [
 *    'node-expo-crypto/jest-setup.js',
 *   ]
 *
 * See the Jest documentation at https://jestjs.io/docs/en/configuration#setupfilesafterenv-array for
 * more details.
 */
jest.mock('expo-crypto', () => require('./dist/index'));
