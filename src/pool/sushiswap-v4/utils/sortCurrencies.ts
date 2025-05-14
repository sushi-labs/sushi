import type { Type } from '../../../currency/type.js'

export function sortCurrencies(currencyA: Type, currencyB: Type): [Type, Type] {
  if (currencyA.isNative) return [currencyA, currencyB]
  if (currencyB.isNative) return [currencyB, currencyA]

  return currencyA.sortsBefore(currencyB)
    ? [currencyA, currencyB]
    : [currencyB, currencyA]
}

export const isCurrencySorted = (currencyA: Type, currencyB: Type): boolean => {
  const [currency0] = sortCurrencies(currencyA, currencyB)
  return currency0 === currencyA
}
