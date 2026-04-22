import { StellarChainId } from '../../../chain/chains.js'
import { StellarToken } from '../../../currency/token.js'

export const STELLAR_PYUSD_ADDRESS = {
  [StellarChainId.STELLAR]:
    'CCCRWH6Q3FNP3I2I57BDLM5AFAT7O6OF6GKQOC6SSJNDAVRZ57SPHGU2',
} as const

export const STELLAR_PYUSD = {
  [StellarChainId.STELLAR]: new StellarToken({
    chainId: StellarChainId.STELLAR,
    address: STELLAR_PYUSD_ADDRESS[StellarChainId.STELLAR],
    issuer: 'GDQE7IXJ4HUHV6RQHIUPRJSEZE4DRS5WY577O2FY6YQ5LVWZ7JZTU2V5',
    decimals: 7,
    symbol: 'PYUSD',
    name: 'PYUSD',
    origin: 'paxos.com',
    metadata: {
      icon: 'https://assets.coingecko.com/coins/images/31212/standard/PYUSD_Token_Logo_2x.png',
    },
  }),
} as const
