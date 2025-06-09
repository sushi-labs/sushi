import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const AGEUR_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x1a7e4e63778B4f12a199C062f3eFdD288afCBce8',
  [EvmChainId.BSC]: '0x12f31B73D812C6Bb0d735a218c086d44D5fe5f89',
  [EvmChainId.ARBITRUM]: '0xFA5Ed56A203466CbBC2430a43c66b9D8723528E7',
  [EvmChainId.AVALANCHE]: '0xAEC8318a9a59bAEb39861d10ff6C7f7bf1F96C57',
  [EvmChainId.POLYGON]: '0xE0B52e49357Fd4DAf2c15e02058DCE6BC0057db4',
  [EvmChainId.OPTIMISM]: '0x9485aca5bbBE1667AD97c7fE7C4531a624C8b1ED',
  [EvmChainId.GNOSIS]: '0x4b1E2c2762667331Bc91648052F646d1b0d35984',
  [EvmChainId.CELO]: '0xC16B81Af351BA9e64C1a069E3Ab18c244A1E3049',
} as const

export const AGEUR = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'agEUR',
    name: 'agEUR',
  },
  AGEUR_ADDRESS,
)
