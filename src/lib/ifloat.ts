import { safeInt } from "./safeInt";

/**
 * Generates a random number between `-1` (inclusive) and `1` (inclusive).
 * Uses {@link safeInt} and thus not recommended for general usage also.
 *
 * Should be somewhat better for calculating PI.
 **/
export const ifloat = (): number => safeInt() / Number.MAX_SAFE_INTEGER;
