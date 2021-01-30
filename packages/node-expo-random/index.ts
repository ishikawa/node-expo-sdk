import crypto from 'crypto';

export function getRandomBytes(byteCount: number): Uint8Array {
  const buffer = crypto.randomBytes(byteCount);
  return new Uint8Array(buffer.buffer);
}

export function getRandomBytesAsync(byteCount: number): Promise<Uint8Array> {
  return Promise.resolve(getRandomBytes(byteCount));
}
