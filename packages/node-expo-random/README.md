# node-expo-random

The package `node-expo-random` provides the same interface of [`expo-random`](https://docs.expo.io/versions/latest/sdk/random/). So Thus, you can implement mocks that work as expected even in the Node environment.

```js
var random = require('node-expo-random');

var bytes = random.getRandomBytes(8);
console.log(bytes);
```

This library also contains default mocks for Jest. For details on how to configure, see below.

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
