import { createCurrencyDeserializer } from '../../generic/currency/deserialize-currency.js'
import { EvmNative, type SerializedEvmNative } from './native.js'
import { EvmToken, type SerializedEvmToken } from './token.js'

function deserializeEvmCurrency(data: SerializedEvmToken): EvmToken
function deserializeEvmCurrency(data: SerializedEvmNative): EvmNative

function deserializeEvmCurrency(
  data: SerializedEvmNative | SerializedEvmToken,
) {
  return deserialize({ ...data, type: data.type })
}

const deserialize = createCurrencyDeserializer({
  native: EvmNative,
  token: EvmToken,
})

export { deserializeEvmCurrency }
