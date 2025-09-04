import * as z from 'zod'
import { serializedChainwebTokenSchema } from '~/chainweb/index.js'
import { serializedEvmCurrencySchema } from '../../evm/currency/currency.js'
import type { serializedEvmTokenSchema } from '../../evm/currency/token.js'
import type { serializedEvmNativeSchema } from '../../evm/index.js'
import { serializedMvmTokenSchema } from '../../mvm/currency/token.js'
import {
  serializedTvmCurrencySchema,
  type serializedTvmNativeSchema,
  type serializedTvmTokenSchema,
} from '../../tvm/index.js'

export type SerializedCurrencySchema =
  | typeof serializedEvmTokenSchema
  | typeof serializedEvmNativeSchema
  | typeof serializedEvmCurrencySchema
  | typeof serializedMvmTokenSchema
  | typeof serializedTvmTokenSchema
  | typeof serializedTvmNativeSchema
  | typeof serializedTvmCurrencySchema
  | typeof serializedCurrencySchema
  | typeof serializedChainwebTokenSchema

export const serializedCurrencySchema = z.union([
  serializedEvmCurrencySchema,
  serializedMvmTokenSchema,
  serializedTvmCurrencySchema,
  serializedChainwebTokenSchema,
])

export type SerializedCurrency = z.infer<typeof serializedCurrencySchema>
