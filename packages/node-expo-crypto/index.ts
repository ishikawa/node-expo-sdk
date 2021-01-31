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
