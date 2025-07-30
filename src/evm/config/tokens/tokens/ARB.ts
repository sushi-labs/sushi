import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const ARB_ADDRESS = {
  [EvmChainId.ARBITRUM]: '0x912ce59144191c1204e64559fe8253a0e49e6548',
  [EvmChainId.ARBITRUM_NOVA]: '0xf823c3cd3cebe0a1fa952ba88dc9eef8e0bf46ad',
  [EvmChainId.ETHEREUM]: '0xb50721bcf8d664c30412cfbc6cf7a15145234ad1',
} as const

export const ARB = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'ARB',
    name: 'Arbitrum',
  },
  ARB_ADDRESS,
)
