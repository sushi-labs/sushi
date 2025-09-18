import { Decimal } from 'decimal.js-light'

export const formatPactDecimal = (value: number): string => {
  const dec = new Decimal(value)
  return dec.toFixed(dec.dp() > 0 ? dec.dp() : 1)
}
