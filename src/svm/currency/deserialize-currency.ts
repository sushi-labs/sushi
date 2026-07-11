import { createCurrencyDeserializer } from '../../generic/currency/deserialize-currency.js'
import { type SerializedSvmNative, SvmNative } from './native.js'
import { type SerializedSvmToken, SvmToken } from './token.js'

function deserializeSvmCurrency(data: SerializedSvmToken): SvmToken
function deserializeSvmCurrency(data: SerializedSvmNative): SvmNative

function deserializeSvmCurrency(
  data: SerializedSvmNative | SerializedSvmToken,
) {
  return deserialize({ ...data, type: data.type })
}

const deserialize = createCurrencyDeserializer({
  native: SvmNative,
  token: SvmToken,
})

export { deserializeSvmCurrency }
