import { uSafeInt } from "./uSafeInt";

const POW_2_53 = Math.pow(2, 53);

/**
 * Generates a random number between `0` (inclusive) and `1` (exclusive).
 * with `53` bits precission.
 **/
export const float = (): number => uSafeInt() / POW_2_53;
