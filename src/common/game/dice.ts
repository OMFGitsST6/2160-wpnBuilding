/**
 * Universal dice group class.
 */
export default class Dice {
  count: number;
  type: number;
  mod: number;

  /**
   * Standard constructor.
   * @param count 
   * @param type 
   * @param mod 
   */
  constructor(count: number, type: number, mod?: number) {
    this.count = count;
    this.type = type;
    this.mod = mod || 0;
  }

  /**
   * Returns a string representation of an object.
   * @returns `NdX+M` format of dice object.
   */
  toString() {
    const modString = this.mod !== 0 ?
      this.mod > 0 ? `+${this.mod}` : `-${this.mod}` :
      ''
    ;
    return `${this.count}d${this.type}${modString}`;
  }
}