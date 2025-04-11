# randomcryp

A cryptographically secure, feature rich, zero dependency, lightweight and browser friendly random number generator library. Only ~5KB in size.
Uses [Crypto.getRandomValues()](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues) to get its randomness.
The spelling is random-creep in case you are wondering.

## Featues

- Lightweight
- Browser friendly
- TypeScript definitions
- Lots of methods and common aliases
- Batteries Included (Zero dependencies)
- Supported in all major JavaScript / TypeScript runtimes (Browser, Node, Deno, Bun etc.)

## Install

```bash
bun add randomcryp # bun
yarn add randomcryp # yarn
pnpm add randomcryp # pnpm
npm install randomcryp # npm
```

## Usage

```ts
import random from "randomcryp";

float(); // 0.190088246732104
```

Or,

```ts
import { rangeInt } from "randomcryp";

rangeInt(1, 10); // 7
```

#### List of Methods

| Method | Description | Aliases |
| -- | -- | -- |
| **`bool(): boolean`** | Generates a random boolean (`true` or `false`). | `bool()` → `true` |
| **`boolean(): boolean`** | Alias for `bool()`. | `boolean()` → `false` |
| **`percentage(p: number): boolean`** | Generates `true` at given percentage of time. | `percentage(20)` → `false` |
| **`probability(p: number): boolean`** | Generates `true` with a given probability `p` and `false` with probability `1-p`. | `probability(0.8)` → `true` |
| **`uSafeInt(): number`** | Generates a random integer between `0` (inclusive) and `Number.MAX_SAFE_INTEGER` (inclusive). | `uSafeInt()` → `4946544243668033` |
| **`float(): number`** | Generates a random number between `0` (inclusive) and `1` (exclusive). | `number()` → `0.190088246732104` |
| **`random(): number`** | Alias for `float()`. | `random()` → `0.9520779718919631` |
| **`hex(length: number = 8, prefix: boolean = false): string`** | Generates a random hex string of the specified length (default 8). Optionally prefixes with '0x'. | `hex(16)` → `d1ef0149c7849844` |
| **`choice(arr: ArrayLike<E>): E`** | Selects a random element from an array. | `choice([1, 2, 3, 4, 5])` → `3` |
| **`pick(arr: ArrayLike<E>): E`** | Alias for `choice()`. | `pick([1, 2, 3, 4, 5])` → `1` |
| **`shuffle(input: string): string`**, **`shuffle(input: Array<E>): Array<E>`** | Returns a new array or string after shuffling the given array or string randomly. | `shuffle([1, 2, 3, 4, 5])` → `[ 1, 3, 2, 5, 4 ]` |
| **`range(min: number, max: number): number`** | Generates a random number (not integer) between given `min` (inclusive) and `max` (exclusive). Throws if `min` > `max`. | `range(1, 5)` → `4.103370176158448` |
| **`rangeInt(min: number, max: number): number`** | Generates a random number (not integer) between given `min` (inclusive) and `max` (exclusive). Throws if `min` > `max`. | `rangeInt(1, 10)` → `8` |
| **`randInt(min: number, max: number): number`** | Alias for `rangeInt()`. | `randInt(1, 100)` → `35` |
| **`safeInt(): number`** | Generates a random integer between `Number.MIN_SAFE_INTEGER` (inclusive) and `Number.MAX_SAFE_INTEGER` (inclusive). +0 and -0 both can be generated. 54 bits precision. Not recommended for general usage. | `safeInt()` → `-5802548511349229` |
| **`ifloat(): number`** | Generates a random number between `-1` (inclusive) and `1` (inclusive). Uses `safeInt()` and thus not recommended. | `ifloat()` → `-0.6076475248861822` |

© 2025, Md. Touhidur Rahman.
License: BSD-3-Clause.
