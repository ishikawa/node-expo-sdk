import * as crypto from 'crypto';

// node_modules/expo-crypto/src/Crypto.types.ts
export enum CryptoDigestAlgorithm {
  MD2 = 'MD2',
  MD4 = 'MD4',
  MD5 = 'MD5',
  SHA1 = 'SHA-1',
  SHA256 = 'SHA-256',
  SHA384 = 'SHA-384',
  SHA512 = 'SHA-512'
}

export enum CryptoEncoding {
  HEX = 'hex',
  BASE64 = 'base64'
}

export type CryptoDigestOptions = {
  encoding: CryptoEncoding;
};

// @docsMissing
export type Digest = string;

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

type TypedArray = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array;

export function getRandomValues(typedArray: TypedArray): TypedArray {
  const buffer = crypto.randomBytes(typedArray.byteLength);
  const view = new Uint8Array(buffer.buffer);
  typedArray.set(view);
  return typedArray;
}

export function randomUUID(): string {
  return crypto.randomUUID();
}
