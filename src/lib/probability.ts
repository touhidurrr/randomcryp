import { float } from "./float";

/**
 * Generates `true` with a given probability `p` and `false` with probability `1-p`.
 * @throws {RangeError} If `p` is not in range `[0, 1]`.
 * @example probability(0.8); // returns true 80% of the time and false 20% of the time.
 */
export const probability = (p: number): boolean => {
  if (p < 0 || p > 1) {
    throw new RangeError(`${p} is not in range [0, 1]`);
  }
  return float() < p;
};
