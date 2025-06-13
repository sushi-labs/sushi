import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const WstETH_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
  [EvmChainId.ARBITRUM]: '0x5979D7b546E38E414F7E9822514be443A4800529',
  [EvmChainId.OPTIMISM]: '0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb',
  [EvmChainId.BASE]: '0xB6fe221Fe9EeF5aBa221c348bA20A1Bf5e73624c',
  [EvmChainId.SCROLL]: '0xf610A9dfB7C89644979b4A0f27063E9e7d7Cda32',
  [EvmChainId.GNOSIS]: '0x6C76971f98945AE98dD7d4DFcA8711ebea946eA6',
} as const

export const WstETH = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'wstETH',
    name: 'Wrapped liquid staked Ether 2.0',
  },
  WstETH_ADDRESS,
)
