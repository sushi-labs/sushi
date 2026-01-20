import * as z from 'zod'
import type { CurrencyMetadata } from '../../generic/currency/currency.js'
import { evmNativeAddress } from '../config/simple-constants.js'
import { type EvmNative, serializedEvmNativeSchema } from './native.js'
import { type EvmToken, serializedEvmTokenSchema } from './token.js'

export type EvmCurrency<
  TMetadata extends CurrencyMetadata = Record<string, unknown>,
> = EvmToken<TMetadata> | EvmNative

export const serializedEvmCurrencySchema = <
  TMetadata extends {} = CurrencyMetadata,
>(
  opts: { metadata?: z.ZodType<TMetadata> } = {},
) =>
  z.discriminatedUnion('type', [
    serializedEvmTokenSchema(opts),
    serializedEvmNativeSchema(opts),
  ])

/**
 *
 * @returns The address of the currency. If the currency is native, returns the native address constant.
 */
export function getEvmCurrencyAddress(currency: EvmCurrency) {
  return currency.type === 'native' ? evmNativeAddress : currency.address
}

export type SerializedEvmCurrency<
  TMetadata extends CurrencyMetadata = CurrencyMetadata,
> = z.infer<ReturnType<typeof serializedEvmCurrencySchema<TMetadata>>>
