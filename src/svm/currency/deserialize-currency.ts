import { type SerializedSvmNative, SvmNative } from './native.js'
import { type SerializedSvmToken, SvmToken } from './token.js'

function deserializeSvmCurrency(data: SerializedSvmToken): SvmToken
function deserializeSvmCurrency(data: SerializedSvmNative): SvmNative

function deserializeSvmCurrency(
  data: SerializedSvmNative | SerializedSvmToken,
) {
  if (data.type === 'native') {
    return new SvmNative(data)
  } else {
    return new SvmToken(data)
  }
}

export { deserializeSvmCurrency }
