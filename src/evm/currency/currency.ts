import { z } from 'zod'
import { type EvmNative, serializedEvmNativeSchema } from './native.js'
import { type EvmToken, serializedEvmTokenSchema } from './token.js'

export type EvmCurrency = EvmToken | EvmNative

export const serializedEvmCurrencySchema = z.discriminatedUnion('type', [
  serializedEvmTokenSchema,
  serializedEvmNativeSchema,
])

export type SerializedEvmCurrency = z.infer<typeof serializedEvmCurrencySchema>
