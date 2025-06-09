import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const SolvBTC_ADDRESS = {
  [EvmChainId.ARBITRUM]: '0x3647c54c4c2c65bc7a2d63c0da2809b399dbbdc0',
  [EvmChainId.ROOTSTOCK]: '0x541Fd749419cA806A8bC7DA8AC23D346f2Df8b77',
} as const

export const SolvBTC = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'Solv BTC',
    name: 'SolvBTC',
  },
  SolvBTC_ADDRESS,
)
