// import numeral from 'numbro'

// export const formatNumber = (value: any, inputString = '0.[00]a') => {
//   if (typeof value === 'string') value = Number(value)

//   let negative = false
//   if (value < 0) {
//     negative = true
//     value = Math.abs(value)
//   }

//   if (value === 0) return '0.00'
//   if (value < 0.0001) return numeral(value).format('0.[000000]a')
//   if (value < 0.001) return numeral(value).format('0.[0000]a')
//   if (value < 0.01) return numeral(value).format('0.[000]a')
//   return `${negative ? '-' : ''}${numeral(value).format(inputString)}`
// }

export const formatNumber = (
  value: string | number,
  maxDecimalPlaces = 2,
): string => {
  value = value ?? 0
  if (typeof value === 'string') value = Number(value)

  let negative = false
  if (value < 0) {
    negative = true
    value = Math.abs(value)
  }

  if (value > 999_000_000_000_000) return '>999t'
  if (value === 0) return '0.00'
  if (value < 0.0001) return value.toFixed(6)
  if (value < 0.001) return value.toFixed(4)
  if (value < 0.01) return value.toFixed(3)

  return `${negative ? '-' : ''}${formatValueWithSuffix(
    value,
    maxDecimalPlaces,
  )}`
}

const formatValueWithSuffix = (
  value: number,
  maxDecimalPlaces: number,
): string => {
  const suffixes: string[] = ['', 'k', 'm', 'b', 't']
  let suffixIndex = 0
  while (value >= 1000 && suffixIndex < suffixes.length - 1) {
    value /= 1000
    suffixIndex++
  }

  const decimalCount = Math.min(
    value.toString().split('.')[1]?.length || 0,
    maxDecimalPlaces,
  )

  const formattedValue = value.toFixed(decimalCount)
  return `${formattedValue}${suffixes[suffixIndex]}`
}

/**
 * Convert scientific notation into decimal form, e.g. "-12.34e-5" => "-0.0001234",
 * @param value Number in scientific notation
 * @return Number in decimal form only
 */
export function withoutScientificNotation(value: string): string | undefined {
  if (!value.includes('e')) return value

  if (!value.match(/^-?\d*\.?\d+(e[+-]?\d+)?$/)) return undefined

  const [sign, absValue] = value.startsWith('-')
    ? ['-', value.slice(1)]
    : ['', value]
  const [m, n] = absValue.split('e') as [string, string]
  const [integer, fraction] = m.split('.')

  const mantissa = (integer + (fraction ?? '')).replace(/^0+/, '')
  const exponent = Number.parseInt(n ?? 0) - (fraction ?? '').length

  if (exponent >= 0) {
    return sign + mantissa + '0'.repeat(exponent)
  } else {
    const i = mantissa.length + exponent
    if (i > 0) {
      return `${sign + mantissa.slice(0, i)}.${mantissa.slice(i) || 0}`
    } else {
      return `${sign}0.${'0'.repeat(-i)}${mantissa}`
    }
  }
}

/**
 *
 * @param num - The number to format, can be a string or a number.
 * @param args.significant - The number of significant digits to display
 * @param args.maxFixed - The maximum number of fixed decimal places to display, only if relevant, eg. "0" for 0, "1.23" for 1.23, etc.
 * @param args.fixed - The number of fixed decimal places to display, always, eg. "0.00" for 0, "1.23" for 1.23, etc.
 * @returns
 */
export function numberToFixed(
  num: string | number,
  args: { maxFixed: number } | { fixed: number } | { significant: number },
) {
  if (typeof num === 'string') {
    return stringToFixed(num, args)
  }

  num = Number(num)

  if ('fixed' in args) {
    return num.toFixed(args.fixed)
  }

  if ('significant' in args) {
    if (Math.abs(num) >= 10 ** args.significant) {
      return Math.round(num).toString()
    }

    return Number.parseFloat(num.toPrecision(args.significant)).toString()
  }

  if ('maxFixed' in args) {
    const str = num.toFixed(args.maxFixed)
    let end = str.length

    while (end && str.charCodeAt(end - 1) === 48) --end
    if (end && str.charCodeAt(end - 1) === 46) --end

    return `${str.slice(0, end)}`
  }

  throw new Error('Invalid arguments for numberToFixed')
}

function stringToFixed(
  _str: string,
  args: Parameters<typeof numberToFixed>[1],
) {
  const str = withoutScientificNotation(_str)

  if (!str) {
    throw new Error('Invalid number string')
  }

  const [integerPart = '0', decimalPart = ''] = str.split('.')

  if ('fixed' in args) {
    const fixedDecimal = decimalPart
      .slice(0, args.fixed)
      .padEnd(args.fixed, '0')

    const res = `${integerPart}${fixedDecimal ? `.${fixedDecimal}` : ''}`
    return roundString(str, res)
  }

  if ('significant' in args) {
    let remainingLength = args.significant - integerPart.length

    if (integerPart === '0' || integerPart.includes('-')) {
      remainingLength += 1
    }

    // Handle leading zeros in decimal part
    for (let i = 0; i < decimalPart.length; i++) {
      if (decimalPart[i] === '0') {
        remainingLength += 1
      }
    }

    let significantDecimal = decimalPart.slice(0, Math.max(remainingLength, 0))
    while (significantDecimal.endsWith('0')) {
      significantDecimal = significantDecimal.slice(0, -1)
    }

    const res = `${integerPart}${significantDecimal ? `.${significantDecimal}` : ''}`
    return roundString(str, res)
  }

  if ('maxFixed' in args) {
    let fixedDecimal = decimalPart.slice(0, args.maxFixed)
    while (fixedDecimal.endsWith('0')) {
      fixedDecimal = fixedDecimal.slice(0, -1)
    }

    return `${integerPart}${fixedDecimal ? `.${fixedDecimal}` : ''}`
  }

  throw new Error('Invalid arguments for stringToFixed')
}

function roundString(original: string, formatted: string) {
  const nextDigitIndex = formatted.length

  let nextDigit = original.charCodeAt(nextDigitIndex)
  if (nextDigit === '.'.charCodeAt(0)) {
    nextDigit = original.charCodeAt(nextDigitIndex + 1)
  }

  if (!Number.isNaN(nextDigit) && nextDigit >= '5'.charCodeAt(0)) {
    const lastDigit = formatted.charCodeAt(formatted.length - 1)
    return `${formatted.substring(0, formatted.length - 1)}${String.fromCharCode(lastDigit + 1)}`
  }

  return formatted
}
