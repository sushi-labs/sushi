import { numberToFixed } from '../format/number.js'
import { Fraction } from './fraction.js'

export class Percent extends Fraction {
  /**
   *
   * @param args.maxFixed - The maximum number of fixed decimal places to display, only if relevant, eg. "0%" for 0, "1.23%" for 0.0123, etc.
   * @param args.fixed - The number of fixed decimal places to display, always, eg. "0.00%" for 0, "1.23%" for 0.0123, etc.
   * @returns A string representation of the percent value, eg. "1.53%"
   */
  public override toString(
    args: Parameters<typeof numberToFixed>[1] = { fixed: 2 },
  ): string {
    const num = this.toNumber() * 100
    const str = numberToFixed(num, args)

    return `${str}%`
  }
}
