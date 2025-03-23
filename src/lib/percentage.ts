import { float } from "./float";

/**
 * Generates true with the probability of the percentage value given.
 * @example percentage(20) // should return true 20% of the time and false 80% of the time.
 **/
export const percentage = (input: number): boolean => {
  if (input < 0 || input > 100) {
    throw new RangeError("input value should be between 0 and 100");
  }
  return float() * 100 < input;
};
