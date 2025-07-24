import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const AGEUR_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x1a7e4e63778b4f12a199c062f3efdd288afcbce8',
  [EvmChainId.BSC]: '0x12f31b73d812c6bb0d735a218c086d44d5fe5f89',
  [EvmChainId.ARBITRUM]: '0xfa5ed56a203466cbbc2430a43c66b9d8723528e7',
  [EvmChainId.AVALANCHE]: '0xaec8318a9a59baeb39861d10ff6c7f7bf1f96c57',
  [EvmChainId.POLYGON]: '0xe0b52e49357fd4daf2c15e02058dce6bc0057db4',
  [EvmChainId.OPTIMISM]: '0x9485aca5bbbe1667ad97c7fe7c4531a624c8b1ed',
  [EvmChainId.GNOSIS]: '0x4b1e2c2762667331bc91648052f646d1b0d35984',
  [EvmChainId.CELO]: '0xc16b81af351ba9e64c1a069e3ab18c244a1e3049',
} as const

export const AGEUR = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'agEUR',
    name: 'agEUR',
  },
  AGEUR_ADDRESS,
)
