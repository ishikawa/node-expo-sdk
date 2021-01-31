# node-expo-crypto

The Node.js implementation for [expo-crypto](https://docs.expo.io/versions/latest/sdk/crypto/).

## Install

```
$ npm install --save-dev node-expo-crypto
```

## Jest configuration

Create a setup file.

```js
jest.mock('expo-crypto/build/ExpoCrypto', () => ({
  digestStringAsync: jest.fn((algorithm, data, options) => {
    const crypto = require('node-expo-crypto');
    return crypto.digestStringAsync(algorithm, data, options);
  })
}));
```

In your Jest configuration.

```json
{
  ...
  "json": {
    "setupFilesAfterEnv": [
      "./test/setup/node-expo-crypto.js"
    ]
  }
}
```
