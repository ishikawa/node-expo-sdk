# node-expo-crypto

The package `node-expo-crypto` provides the same interface of [`expo-crypto`](https://docs.expo.io/versions/latest/sdk/crypto/). So Thus, you can implement mocks that work as expected even in the Node environment.

```typescript
const crypto = require('node-expo-crypto');

const digest = await crypto.digestStringAsync('sha256', 'hello');
console.log(digest); // 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824
```

This package also contains default mocks for [Jest](https://jestjs.io/) testing framework. For details on how to configure, see below.

## Install

```
$ npm install --save-dev node-expo-crypto
```

## Jest configuration

In your Jest configuration.

```json
{
  ...
  "json": {
    "setupFilesAfterEnv": [
      "node-expo-crypto/jest-setup.js"
    ]
  }
}
```
