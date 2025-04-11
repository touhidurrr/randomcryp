import { uSafeInt } from "./uSafeInt";

/**
 * Generates a `boolean` value randomly.
 * `true` and `false` are equally likely.
 **/
export const bool = (): boolean => uSafeInt() % 2 === 0;
