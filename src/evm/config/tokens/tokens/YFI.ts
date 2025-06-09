import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const YFI_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  [EvmChainId.POLYGON]: '0xDA537104D6A5edd53c6fBba9A898708E465260b6',
  [EvmChainId.GNOSIS]: '0xbf65bfcb5da067446CeE6A706ba3Fe2fB1a9fdFd',
  [EvmChainId.HARMONY]: '0xa0dc05F84A27FcCBD341305839019aB86576bc07',
  [EvmChainId.AVALANCHE]: '0x9eAaC1B23d935365bD7b542Fe22cEEe2922f52dc',
  [EvmChainId.ARBITRUM]: '0x82e3a8f066a6989666b031d916c43672085b1582',
} as const

export const YFI = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'YFI',
    name: 'yearn.finance',
  },
  YFI_ADDRESS,
)
