import {
  serializedTvmTokenSchema,
  type SerializedTvmToken,
  type TvmToken,
} from './token.js'
import {
  serializedTvmNativeSchema,
  type SerializedTvmNative,
  type TvmNative,
} from './native.js'
import * as z from 'zod'

export type TvmCurrency = TvmNative | TvmToken

export const serializedTvmCurrencySchema = z.discriminatedUnion('type', [
  serializedTvmTokenSchema,
  serializedTvmNativeSchema,
])

export type SerializedTvmCurrency = z.infer<typeof serializedTvmCurrencySchema>

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
