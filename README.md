# node-expo-sdk

This repository contains several packages that mimic Expo SDK to run unit tests properly even on
Node.js environment.

## Motivation

The [jest-expo](https://www.npmjs.com/package/jest-expo) is doing a great job for mocking Expo SDK while
running on Node.js environment. But I wanted to make primitive operations like random, crypto work normally
rather than just returning `undefined`.
