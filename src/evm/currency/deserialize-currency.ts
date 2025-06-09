import { EvmNative, type SerializedEvmNative } from './native.js'
import { EvmToken, type SerializedEvmToken } from './token.js'

function deserializeEvmCurrency(data: SerializedEvmToken): EvmToken
function deserializeEvmCurrency(data: SerializedEvmNative): EvmNative

function deserializeEvmCurrency(
  data: SerializedEvmNative | SerializedEvmToken,
) {
  if (data.type === 'native') {
    return new EvmNative(data)
  } else {
    return new EvmToken(data)
  }
}

export { deserializeEvmCurrency }
