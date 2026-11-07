import { float } from "./float";

/**
 * Randomly choose an element from an array-like object.
 *
 * @example
 *   choice([1, 2, 3]); // 2
 *
 * @returns `undefined` if the array is empty.
 * @returns A random element from the array if at least one element is present.
 */
export const choice = <E>(choices: ArrayLike<E>): E | undefined => {
  if (choices.length === 0) return undefined;

  return choices[Math.floor(float() * choices.length)];
};
