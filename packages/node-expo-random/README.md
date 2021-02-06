# node-expo-random

The package `node-expo-random` provides the same interface of [`expo-random`](https://docs.expo.io/versions/latest/sdk/random/). So Thus, you can implement mocks that work as expected even in the Node environment.

```js
var random = require('node-expo-random');

var bytes = random.getRandomBytes(8);
console.log(bytes); // Uint8Array(8) [5, 169, 234, 152, 41, 248, 121, 197]
```

This package also contains default mocks for [Jest](https://jestjs.io/) testing framework. For details on how to configure, see below.

## Install

```
$ npm install --save-dev node-expo-random
```

## Jest configuration

In your Jest configuration.

```json
{
  ...
  "json": {
    "setupFilesAfterEnv": [
      "node-expo-random/jest-setup.js"
    ]
  }
}
```
