import { float } from "./float";

/**
 * Returns a new string containing the characters of the input string in a shuffled order.
 */
function shuffle(input: string): string;
/**
 * Returns a new array containing the elements of the input array in a shuffled order.
 */
function shuffle<E>(input: E[]): E[];
function shuffle<E>(input: string | E[]): string | E[] {
  const array = Array.from(input as any);
  for (let i = array.length - 1; i > 0; i--) {
    const pick = Math.floor(float() * (i + 1));

    const temp = array[i]!;
    array[i] = array[pick]!;
    array[pick] = temp;
  }

  return typeof input === "string" ? array.join("") : (array as E[]);
}

export { shuffle };
