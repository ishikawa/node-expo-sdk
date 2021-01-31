# node-expo-random

The Node.js implementation for [expo-random](https://docs.expo.io/versions/latest/sdk/random/).

## Install

```
$ npm install --save-dev node-expo-random
```

## Jest configuration

Create a setup file.

```js
jest.mock('expo-random/build/ExpoRandom', () => ({
  getRandomBytes: jest.fn(byteCount => {
    const random = require('node-expo-random');
    return random.getRandomBytes(byteCount);
  }),
  getRandomBytesAsync: jest.fn(byteCount => {
    const random = require('node-expo-random');
    return random.getRandomBytesAsync(byteCount);
  })
}));
```

In your Jest configuration.

```json
{
  ...
  "json": {
    "setupFilesAfterEnv": [
      "./test/setup/node-expo-random.js"
    ]
  }
}
```
