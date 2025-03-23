const POW_2_37 = Math.pow(2, 37);
const POW_2_21 = Math.pow(2, 21);
const POW_2_5 = Math.pow(2, 5);

/**
 * Generates a random integer
 * between 0 (inclusive) and {@link Number.MAX_SAFE_INTEGER} (inclusive)
 * with 53 bits precission.
 **/
export const uSafeInt = (): number => {
  const [num1, num2, num3, num4] = crypto.getRandomValues(new Uint16Array(4));
  return (
    num1! * POW_2_37 +
    num2! * POW_2_21 +
    num3! * POW_2_5 +
    (num4! & (POW_2_5 - 1))
  );
};
