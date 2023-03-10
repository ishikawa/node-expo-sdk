import * as crypto from 'crypto';

export function digestStringAsync(
  algorithm: string,
  data: string,
  options: { encoding?: crypto.BinaryToTextEncoding } = { encoding: 'hex' }
): Promise<string> {
  const hash = crypto.createHash(algorithm.toLowerCase().replace('-', ''));

  hash.update(data);
  return Promise.resolve(hash.digest(options.encoding ?? 'hex'));
}

export function getRandomBytes(byteCount: number): Uint8Array {
  const buffer = crypto.randomBytes(byteCount);
  return new Uint8Array(buffer.buffer);
}

export function getRandomBytesAsync(byteCount: number): Promise<Uint8Array> {
  return Promise.resolve(getRandomBytes(byteCount));
}
