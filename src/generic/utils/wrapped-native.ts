import { isEvmChainId, type EvmChainId } from '../../evm/chain/chains.js'
import { isEvmWNativeSupported } from '../../evm/config/tokens/wrapped-native.js'
import { isSvmChainId, type SvmChainId } from '../../svm/chain/chains.js'
import { isSvmWNativeSupported } from '../../svm/config/tokens/wrapped-native.js'

export const isWNativeSupported = (chainId: EvmChainId | SvmChainId) => {
  if (isEvmChainId(chainId)) return isEvmWNativeSupported(chainId)
  if (isSvmChainId(chainId)) return isSvmWNativeSupported(chainId)

  return false
}
