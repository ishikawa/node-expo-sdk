# node-expo-crypto

The package `node-expo-crypto` provides the same interface of [`expo-crypto`](https://docs.expo.io/versions/latest/sdk/crypto/). So Thus, you can implement mocks that work as expected even in the Node environment.

```js
var crypto = require('node-expo-crypto');

var data = 'hello';
var digest = crypto.digestStringAsync('sha256', data);

console.log(digest);
```

This library also contains default mocks for Jest. For details on how to configure, see below.

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
