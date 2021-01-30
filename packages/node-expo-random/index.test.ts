import { getRandomBytes } from 'expo-random';

describe('getRandomBytes', () => {
  test('get random bytes', async () => {
    const bytes = getRandomBytes(8);
    expect(bytes).toHaveLength(8);
  });
});
