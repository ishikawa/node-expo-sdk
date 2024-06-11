import {
  digestStringAsync,
  getRandomBytes,
  getRandomValues,
  randomUUID,
  CryptoDigestAlgorithm,
  CryptoEncoding
} from 'node-expo-crypto';

const INPUT = 'hi';

describe('digestStringAsync', () => {
  // NOTE: 'md2' not supported
  // NOTE: 'md4' not supported

  [
    {
      algorithm: CryptoDigestAlgorithm.MD5,
      hex: '49f68a5c8493ec2c0bf489821c21fc3b',
      base64: 'SfaKXIST7CwL9ImCHCH8Ow=='
    },
    {
      algorithm: CryptoDigestAlgorithm.SHA1,
      hex: 'c22b5f9178342609428d6f51b2c5af4c0bde6a42',
      base64: 'witfkXg0JglCjW9RssWvTAveakI='
    },
    {
      algorithm: CryptoDigestAlgorithm.SHA256,
      hex: '8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4',
      base64: 'j0NDRmSPa5bfid2pAcUXaxCm2Dlh3TwayItZstwyeqQ='
    },
    {
      algorithm: CryptoDigestAlgorithm.SHA384,
      hex: '0791006df8128477244f53d0fdce210db81f55757510e26acee35c18a6bceaa28dcdbbfd6dc041b9b4dc7b1b54e37f52',
      base64: 'B5EAbfgShHckT1PQ/c4hDbgfVXV1EOJqzuNcGKa86qKNzbv9bcBBubTcextU439S'
    },
    {
      algorithm: CryptoDigestAlgorithm.SHA512,
      hex: '150a14ed5bea6cc731cf86c41566ac427a8db48ef1b9fd626664b3bfbb99071fa4c922f33dde38719b8c8354e2b7ab9d77e0e67fc12843920a712e73d558e197',
      base64: 'FQoU7VvqbMcxz4bEFWasQnqNtI7xuf1iZmSzv7uZBx+kySLzPd44cZuMg1Tit6udd+Dmf8EoQ5IKcS5z1Vjhlw=='
    }
  ].forEach(({ algorithm, hex, base64 }) => {
    test(`algorithm: ${algorithm} w/o options`, async () => {
      const digest = await digestStringAsync(algorithm, INPUT);
      expect(digest).toEqual(hex);
    });
    test(`algorithm: ${algorithm} w/ encoding HEX`, async () => {
      const digest = await digestStringAsync(algorithm, INPUT, { encoding: CryptoEncoding.HEX });
      expect(digest).toEqual(hex);
    });
    test(`algorithm: ${algorithm} w/ encoding BASE64`, async () => {
      const digest = await digestStringAsync(algorithm, INPUT, { encoding: CryptoEncoding.BASE64 });
      expect(digest).toEqual(base64);
    });
  });
});

describe('getRandomBytes', () => {
  test('get random bytes', async () => {
    const bytes = getRandomBytes(8);
    expect(bytes).toHaveLength(8);
  });

  test('returns unique values', async () => {
    expect(getRandomBytes(8)).not.toEqual(getRandomBytes(8));
  });
});

describe('getRandomValues', () => {
  test('get random values', async () => {
    const typedArray = new Uint8Array(8);
    const values = getRandomValues(typedArray);
    expect(values).toHaveLength(8);
  });

  test('returns unique values', async () => {
    const typedArray1 = new Uint8Array(8);
    const typedArray2 = new Uint8Array(8);

    getRandomValues(typedArray1);
    getRandomValues(typedArray2);

    expect(typedArray1).not.toEqual(getRandomValues(typedArray2));
  });
});

describe('randomUUID', () => {
  test('get random UUID', async () => {
    const uuid = randomUUID();
    expect(uuid).toHaveLength(36);
  });

  test('returns unique values', async () => {
    expect(randomUUID()).not.toEqual(randomUUID());
  });
});
