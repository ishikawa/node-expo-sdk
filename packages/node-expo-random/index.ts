// expo-random: nodejs implementations
jest.mock('expo-random/build/ExpoRandom', () => ({
  getRandomBytes: jest.fn((byteCount: number) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const crypto = require('crypto');
    const buffer = crypto.randomBytes(byteCount);
    return new Uint8Array(buffer.buffer);
  }),
  getRandomBytesAsync: jest.fn((byteCount: number) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const crypto = require('crypto');
    const buffer = crypto.randomBytes(byteCount);
    return Promise.resolve(new Uint8Array(buffer.buffer));
  })
}));
