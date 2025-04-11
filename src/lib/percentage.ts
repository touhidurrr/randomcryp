import { float } from "./float";

/**
 * Generates `true` with the probability of the percentage value given.
 * @example percentage(20) // should return true 20% of the time and false 80% of the time.
 * @throws RangeError if `p` is not range `[0, 100]`.
 **/
export const percentage = (p: number): boolean => {
  if (p < 0 || p > 100) {
    throw new RangeError(`${p} is not in range [0, 100]`);
  }
  return float() * 100 < p;
};
