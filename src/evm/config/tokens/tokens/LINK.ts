import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const LINK_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  [EvmChainId.POLYGON]: '0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39',
  [EvmChainId.GNOSIS]: '0xE2e73A1c69ecF83F464EFCE6A5be353a37cA09b2',
  [EvmChainId.BSC]: '0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD',
  [EvmChainId.OPTIMISM]: '0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6',
  [EvmChainId.HARMONY]: '0x218532a12a389a4a92fC0C5Fb22901D1c19198aA',
  [EvmChainId.AVALANCHE]: '0x5947BB275c521040051D82396192181b413227A3',
  [EvmChainId.ARBITRUM]: '0xf97f4df75117a78c1A5a0DBb814Af92458539FB4',
} as const

export const LINK = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'LINK',
    name: 'ChainLink Token',
  },
  LINK_ADDRESS,
)
