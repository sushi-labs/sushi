import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const WstETH_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
  [EvmChainId.ARBITRUM]: '0x5979d7b546e38e414f7e9822514be443a4800529',
  [EvmChainId.OPTIMISM]: '0x1f32b1c2345538c0c6f582fcb022739c4a194ebb',
  [EvmChainId.BASE]: '0xb6fe221fe9eef5aba221c348ba20a1bf5e73624c',
  [EvmChainId.SCROLL]: '0xf610a9dfb7c89644979b4a0f27063e9e7d7cda32',
  [EvmChainId.GNOSIS]: '0x6c76971f98945ae98dd7d4dfca8711ebea946ea6',
  [EvmChainId.KATANA]: '0x7fb4d0f51544f24f385a421db6e7d4fc71ad8e5c',
} as const

export const WstETH = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'wstETH',
    name: 'Wrapped liquid staked Ether 2.0',
  },
  WstETH_ADDRESS,
)
