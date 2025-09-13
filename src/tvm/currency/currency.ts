import * as z from 'zod'
import type { CurrencyMetadata } from '../../generic/currency/currency.js'
import {
  type SerializedTvmNative,
  serializedTvmNativeSchema,
  type TvmNative,
} from './native.js'
import {
  type SerializedTvmToken,
  serializedTvmTokenSchema,
  type TvmToken,
} from './token.js'

export type TvmCurrency<
  TMetadata extends CurrencyMetadata = Record<string, unknown>,
> = TvmNative | TvmToken<TMetadata>

export const serializedTvmCurrencySchema = <
  TMetadata extends {} = CurrencyMetadata,
>(
  opts: { metadata?: z.ZodType<TMetadata> } = {},
) =>
  z.discriminatedUnion('type', [
    serializedTvmTokenSchema(opts),
    serializedTvmNativeSchema(opts),
  ])

export type SerializedTvmCurrency<
  TMetadata extends CurrencyMetadata = CurrencyMetadata,
> = z.infer<ReturnType<typeof serializedTvmCurrencySchema<TMetadata>>>

function deserializeTvmCurrency(data: SerializedTvmToken): TvmToken
function deserializeTvmCurrency(data: SerializedTvmNative): TvmNative

function deserializeTvmCurrency(
  data: SerializedTvmNative | SerializedTvmToken,
) {
  if (data.type === 'native') {
    return data as TvmNative
  } else {
    return data as TvmToken
  }
}

export { deserializeTvmCurrency }
