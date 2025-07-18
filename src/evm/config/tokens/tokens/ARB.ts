import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const ARB_ADDRESS = {
  [EvmChainId.ARBITRUM]: '0x912CE59144191C1204E64559FE8253a0e49E6548',
  [EvmChainId.ARBITRUM_NOVA]: '0xf823C3cD3CeBE0a1fA952ba88Dc9EEf8e0Bf46AD',
  [EvmChainId.ETHEREUM]: '0xB50721BCf8d664c30412Cfbc6cf7a15145234ad1',
} as const

export const ARB = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'ARB',
    name: 'Arbitrum',
  },
  ARB_ADDRESS,
)
