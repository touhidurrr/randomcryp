import { float } from "./float";

/**
 * Randomly shuffles the elements of an array ***in place***. The original array is modified.
 */
export const shuffle = <E>(array: Array<E>): Array<E> => {
  for (let i = array.length - 1; i > 0; i--) {
    const pick = Math.floor(float() * (i + 1));

    const temp = array[i]!;
    array[i] = array[pick]!;
    array[pick] = temp;
  }
  return array;
};
