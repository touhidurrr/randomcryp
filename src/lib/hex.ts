const digits = "0123456789abcdef";

/**
 * Generates a random hex string of the specified length.
 * @param {number} [length=8] - The length of the hex string to generate. Default is `8`.
 * @param {boolean} [prefix=false] - If `true`, the hex string will be prefixed with `"0x"`. Default `false`.
 * @returns {string} A random hex string of the specified length.
 */
export const hex = (length: number = 8, prefix: boolean = false): string => {
  const randArr = crypto.getRandomValues(new Uint8Array(Math.ceil(length / 2)));
  const hexArr = new Array<string>(randArr.length);

  for (let i = 0, j = 0; i < length; i++, j = Math.floor(i / 2)) {
    if (i % 2 === 0) {
      hexArr[i] = digits[randArr[j]! >> 4]!;
    } else {
      hexArr[i] = digits[randArr[j]! & 0x0f]!;
    }
  }

  if (prefix) return "0x" + hexArr.join("");
  return hexArr.join("");
};
