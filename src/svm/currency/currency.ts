import { z } from 'zod'
import type { CurrencyMetadata } from '../../generic/currency/currency.js'
import { svmNativeAddress } from '../config/simple-constants.js'
import { type SvmNative, serializedSvmNativeSchema } from './native.js'
import { type SvmToken, serializedSvmTokenSchema } from './token.js'

export type SvmCurrency<
  TMetadata extends CurrencyMetadata = Record<string, unknown>,
> = SvmToken<TMetadata> | SvmNative

export const serializedSvmCurrencySchema = <
  TMetadata extends {} = CurrencyMetadata,
>(
  opts: { metadata?: z.ZodType<TMetadata> } = {},
) =>
  z.discriminatedUnion('type', [
    serializedSvmTokenSchema(opts),
    serializedSvmNativeSchema(opts),
  ])

/**
 *
 * @returns The address of the currency. If the currency is native, returns the native address constant.
 */
export function getSvmCurrencyAddress(currency: SvmCurrency) {
  return currency.type === 'native' ? svmNativeAddress : currency.address
}

export type SerializedSvmCurrency<
  TMetadata extends CurrencyMetadata = CurrencyMetadata,
> = z.infer<ReturnType<typeof serializedSvmCurrencySchema<TMetadata>>>
