import * as z from 'zod'
import {
  type SerializedTvmNative,
  type TvmNative,
  serializedTvmNativeSchema,
} from './native.js'
import {
  type SerializedTvmToken,
  type TvmToken,
  serializedTvmTokenSchema,
} from './token.js'

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
