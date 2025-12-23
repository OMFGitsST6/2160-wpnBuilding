export default class MiscUtil {

  /**
   * Returns the median of an array of numbers.
   * @param values Array of numbers.
   * @returns Median of `arr`.
   */
  static median(...values: number[]): number {
    if (values.length === 0) {
      throw new Error('Cannot find middle of empty array.')
    } else if (values.length % 2 === 0) {
      const sortedValues = values.sort();
      const mid1 = sortedValues[(sortedValues.length / 2) - 1];
      const mid2 = sortedValues[(sortedValues.length / 2) + 0];
      return ((mid1 + mid2) / 2);
    } else {
      const sortedValues = values.sort();
      return sortedValues[Math.floor(sortedValues.length / 2)];
    }
  }

  /**
   * Rounds `x` to the nearest `multiple`.
   * @param x Value to be rounded.
   * @param multiple Value to round to.
   */
  static mround(x: number, multiple: number): number {
    const div = Math.floor(x / multiple);
    const mod = x % multiple;
    return (multiple * div) + (mod >= (multiple / 2) ? multiple : 0);
  }
}