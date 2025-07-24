import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const axlETH_ADDRESS = {
  [EvmChainId.KAVA]: '0xb829b68f57cc546da7e5806a929e53be32a4625d',
  [EvmChainId.HAQQ]: '0xeceeefcee421d8062ef8d6b4d814efe4dc898265',
} as const

export const axlETH = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'axlETH',
    name: 'Axelar Wrapped ETH',
  },
  axlETH_ADDRESS,
)
