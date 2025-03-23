import { float } from "./float";

/**
 * Generates a random number integer
 * between given `min` (inclusive) and `max` (inclusive).
 * Throws if `min` > `max`.
 *
 * @example rangeInt(1, 100) // 35
 */
export const rangeInt = (min: number, max: number): number => {
  if (min > max) {
    throw new RangeError("min must be less than or equal to max");
  }

  return min + Math.floor(float() * (max - min + 1));
};
