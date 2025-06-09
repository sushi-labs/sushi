import { Fraction } from './fraction.js'

export class Percent extends Fraction {
  /**
   *
   * @param args.maxFixed - The maximum number of fixed decimal places to display, only if relevant, eg. "0%" for 0, "1.23%" for 0.0123, etc.
   * @param args.fixed - The number of fixed decimal places to display, always, eg. "0.00%" for 0, "1.23%" for 0.0123, etc.
   * @returns
   */
  public override toString(
    args: { maxFixed: number } | { fixed: number } = { fixed: 2 },
  ): string {
    const num = this.toNumber() * 100

    if ('fixed' in args) {
      return `${num.toFixed(args.fixed)}%`
    }

    const str = num.toFixed(args.maxFixed)
    let end = str.length

    while (end && str.charCodeAt(end - 1) === 48) --end
    if (end && str.charCodeAt(end - 1) === 46) --end

    return `${str.slice(0, end)}%`
  }
}
