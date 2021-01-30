import { getRandomBytes } from 'expo-random';

describe('getRandomBytes', () => {
  test('get random bytes', async () => {
    const bytes = getRandomBytes(8);
    expect(bytes).toHaveLength(8);
  });

  test('returns unique values', async () => {
    expect(getRandomBytes(8)).not.toEqual(getRandomBytes(8));
  });
});
