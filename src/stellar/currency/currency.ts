import * as z from 'zod'
import type { CurrencyMetadata } from '../../generic/currency/currency.js'
import { type StellarToken, serializedStellarTokenSchema } from './token.js'

export type StellarCurrency<
  TMetadata extends CurrencyMetadata = Record<string, unknown>,
> = StellarToken<TMetadata>

export const serializedStellarCurrencySchema = <
  TMetadata extends {} = CurrencyMetadata,
>(
  opts: { metadata?: z.ZodType<TMetadata> } = {},
) => z.discriminatedUnion('type', [serializedStellarTokenSchema(opts)])

export function getStellarCurrencyAddress(currency: StellarCurrency) {
  return currency.address
}

export type SerializedStellarCurrency<
  TMetadata extends CurrencyMetadata = CurrencyMetadata,
> = z.infer<ReturnType<typeof serializedStellarCurrencySchema<TMetadata>>>
