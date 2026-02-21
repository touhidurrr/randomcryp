import { float } from "./float";

function _shuffle<E>(input: ArrayLike<E> | Iterable<E>): E[] {
  const array = Array.from(input);
  for (let i = array.length - 1; i > 0; i--) {
    const pick = Math.floor(float() * (i + 1));

    const temp = array[i]!;
    array[i] = array[pick]!;
    array[pick] = temp;
  }
  return array;
}

/**
 * Returns a new string containing the characters of the input string in a shuffled order.
 */
function shuffle(input: string): string;
/**
 * Returns a new array containing the elements of the input array in a shuffled order.
 */
function shuffle<E>(input: E[]): E[];
function shuffle<E>(input: ArrayLike<E> | Iterable<E>): E[];
function shuffle<E>(input: string | ArrayLike<E> | Iterable<E>): string | E[] {
  if (typeof input === "string") {
    return _shuffle(input).join("");
  } else {
    return _shuffle(input);
  }
}

export { shuffle };
