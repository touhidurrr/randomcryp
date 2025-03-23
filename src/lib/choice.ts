import { float } from "./float";

/**
 * Randomly choose an element from an array-like object.
 * @returns undefined if the array is empty.
 * @returns a random element from the array if at least one element is present.
 * @example choice([1, 2, 3]) // 2
 */
export const choice = <E>(choices: ArrayLike<E>): E | undefined => {
  if (choices.length === 0) return undefined;

  return choices[Math.floor(float() * choices.length)];
};
