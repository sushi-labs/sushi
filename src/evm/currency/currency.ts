import { type EvmNative, serializedEvmNativeSchema } from './native.js'
import { type EvmToken, serializedEvmTokenSchema } from './token.js'
import { z } from 'zod'

export type EvmCurrency = EvmToken | EvmNative

export const serializedEvmCurrencySchema = z.discriminatedUnion('type', [
  serializedEvmTokenSchema,
  serializedEvmNativeSchema,
])

export type SerializedEvmCurrency = z.infer<typeof serializedEvmCurrencySchema>
