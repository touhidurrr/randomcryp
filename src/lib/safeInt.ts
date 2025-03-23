const POW_2_37 = Math.pow(2, 37);
const POW_2_21 = Math.pow(2, 21);
const POW_2_5 = Math.pow(2, 5);

/**
 * Generates a random integer
 * between {@link Number.MIN_SAFE_INTEGER} (inclusive) and {@link Number.MAX_SAFE_INTEGER} (inclusive).
 * +0 and -0 can both appear, and technically 54 bit in precision but not recommended for general usage.
 *
 * Use {@link uSafeInt} for instead.
 **/
export const safeInt = (): number => {
  const [num1, num2, num3, num4] = crypto.getRandomValues(new Uint16Array(4));
  return (
    ((num4! & POW_2_5) < 1 ? 1 : -1) *
    (num1! * POW_2_37 +
      num2! * POW_2_21 +
      num3! * POW_2_5 +
      (num4! & (POW_2_5 - 1)))
  );
};
