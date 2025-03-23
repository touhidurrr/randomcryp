import { float } from "./float";

/**
 * Generates a random number (not integer)
 * between given `min` (inclusive) and `max` (exclusive).
 * Throws if `min` > `max`.
 *
 * @example range(1, 10) // 2.4802525465053487
 */
export const range = (min: number, max: number): number => {
  if (min > max) {
    throw new RangeError("min must be less than or equal to max");
  }

  return min + float() * (max - min);
};
