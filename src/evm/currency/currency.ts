import { z } from 'zod'
import type { CurrencyMetadata } from '../../generic/currency/currency.js'
import { nativeAddress } from '../config/simple-constants.js'
import { type EvmNative, serializedEvmNativeSchema } from './native.js'
import { type EvmToken, serializedEvmTokenSchema } from './token.js'

export type EvmCurrency<
  TMetadata extends CurrencyMetadata = Record<string, unknown>,
> = EvmToken<TMetadata> | EvmNative

export const serializedEvmCurrencySchema = z.discriminatedUnion('type', [
  serializedEvmTokenSchema,
  serializedEvmNativeSchema,
])

export type SerializedEvmCurrency = z.infer<typeof serializedEvmCurrencySchema>

/**
 *
 * @returns The address of the currency. If the currency is native, returns the native address constant.
 */
export function getEvmCurrencyAddress(currency: EvmCurrency) {
  return currency.type === 'native' ? nativeAddress : currency.address
}
