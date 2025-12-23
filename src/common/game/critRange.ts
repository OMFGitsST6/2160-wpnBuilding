/**
 * Universal critical threat range class.
 */
export default class CritRange {
  range: number;
  multiplier: number;

  constructor(range: number, multiplier: number) {
    this.range = range;
    this.multiplier = multiplier;
  }

  /**
   * Returns a string representation of an object.
   * @returns `[N-]20 xM` format of critical threat range object.
   */
  toString() {
    const rangeString = this.range < 20 ? `${this.range}-` : '';
    return `${rangeString}20 x${this.multiplier}`;
  }
}