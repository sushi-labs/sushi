import { z } from 'zod'
import type { CurrencyMetadata } from '../../generic/currency/currency.js'
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
