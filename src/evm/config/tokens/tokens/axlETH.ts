import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const axlETH_ADDRESS = {
  [EvmChainId.KAVA]: '0xb829b68f57CC546dA7E5806A929e53bE32a4625D',
  [EvmChainId.HAQQ]: '0xecEEEfCEE421D8062EF8d6b4D814efe4dc898265',
} as const

export const axlETH = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'axlETH',
    name: 'Axelar Wrapped ETH',
  },
  axlETH_ADDRESS,
)
