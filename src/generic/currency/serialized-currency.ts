import * as z from 'zod'
import { serializedEvmCurrencySchema } from '../../evm/currency/currency.js'
import type { serializedEvmNativeSchema } from '../../evm/currency/native.js'
import type { serializedEvmTokenSchema } from '../../evm/currency/token.js'
import { serializedKvmTokenSchema } from '../../kvm/currency/token.js'
import { serializedMvmTokenSchema } from '../../mvm/currency/token.js'
import { serializedSvmCurrencySchema } from '../../svm/currency/currency.js'
import type { serializedSvmNativeSchema } from '../../svm/currency/native.js'
import type { serializedSvmTokenSchema } from '../../svm/index.js'
import type { CurrencyMetadata } from './currency.js'

export type SerializedCurrencySchema<
  TMetadata extends CurrencyMetadata = CurrencyMetadata,
> = ReturnType<
  | typeof serializedEvmTokenSchema<TMetadata>
  | typeof serializedEvmNativeSchema<TMetadata>
  | typeof serializedEvmCurrencySchema<TMetadata>
  | typeof serializedMvmTokenSchema<TMetadata>
  | typeof serializedCurrencySchema<TMetadata>
  | typeof serializedKvmTokenSchema<TMetadata>
  | typeof serializedSvmNativeSchema<TMetadata>
  | typeof serializedSvmTokenSchema<TMetadata>
  | typeof serializedSvmCurrencySchema<TMetadata>
>

export const serializedCurrencySchema = <
  TMetadata extends {} = CurrencyMetadata,
>(
  opts: { metadata?: z.ZodType<TMetadata> } = {},
) =>
  z.union([
    serializedEvmCurrencySchema(opts),
    serializedMvmTokenSchema(opts),
    serializedKvmTokenSchema(opts),
    serializedSvmCurrencySchema(opts),
  ])

export type SerializedCurrency<
  TMetadata extends CurrencyMetadata = CurrencyMetadata,
> = z.infer<ReturnType<typeof serializedCurrencySchema<TMetadata>>>
