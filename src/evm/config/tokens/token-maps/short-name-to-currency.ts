import { EvmChainId } from '~evm/chain/chains.js'
import {
  AGEUR,
  DAI,
  FRAX,
  LUSD,
  MAI,
  MIM,
  OP,
  SKL,
  SUSHI,
  UNI,
  USDB,
  USDC,
  USDT,
  WBTC,
  WETH9,
} from '~evm/config/tokens/tokens/index.js'
import { getEvmNativeByChainId } from '~evm/currency/native.js'
import { WNATIVE } from '../wrapped-native.js'
import { createEvmToken } from '~evm/currency/token.js'
import type { EvmCurrency } from '~evm/currency/currency.js'

const CHAIN_ID_SHORT_CURRENCY_NAME_TO_CURRENCY = {
  [EvmChainId.ARBITRUM]: {
    ETH: getEvmNativeByChainId(EvmChainId.ARBITRUM),
    WETH: WNATIVE[EvmChainId.ARBITRUM],
    WBTC: WBTC[EvmChainId.ARBITRUM],
    USDC: USDC[EvmChainId.ARBITRUM],
    USDT: USDT[EvmChainId.ARBITRUM],
    DAI: DAI[EvmChainId.ARBITRUM],
    FRAX: FRAX[EvmChainId.ARBITRUM],
    MIM: MIM[EvmChainId.ARBITRUM],
    SUSHI: SUSHI[EvmChainId.ARBITRUM],
    MAI: MAI[EvmChainId.ARBITRUM],
    UNI: UNI[EvmChainId.ARBITRUM],
    AGEUR: AGEUR[EvmChainId.ARBITRUM],
  },
  [EvmChainId.ARBITRUM_NOVA]: {
    ETH: getEvmNativeByChainId(EvmChainId.ARBITRUM_NOVA),
    WETH: WNATIVE[EvmChainId.ARBITRUM_NOVA],
    SUSHI: SUSHI[EvmChainId.ARBITRUM_NOVA],
  },
  [EvmChainId.AVALANCHE]: {
    AVAX: getEvmNativeByChainId(EvmChainId.AVALANCHE),
    WAVAX: WNATIVE[EvmChainId.AVALANCHE],
    ETH: WETH9[EvmChainId.AVALANCHE],
    WETH: WETH9[EvmChainId.AVALANCHE],
    WBTC: WBTC[EvmChainId.AVALANCHE],
    USDC: USDC[EvmChainId.AVALANCHE],
    USDT: USDT[EvmChainId.AVALANCHE],
    DAI: DAI[EvmChainId.AVALANCHE],
    FRAX: FRAX[EvmChainId.AVALANCHE],
    MIM: MIM[EvmChainId.AVALANCHE],
    SUSHI: SUSHI[EvmChainId.AVALANCHE],
    MAI: MAI[EvmChainId.AVALANCHE],
    UNI: UNI[EvmChainId.AVALANCHE],
    AGEUR: AGEUR[EvmChainId.AVALANCHE],
  },
  [EvmChainId.BOBA]: {
    ETH: getEvmNativeByChainId(EvmChainId.BOBA),
    WETH: WNATIVE[EvmChainId.BOBA],
    SUSHI: SUSHI[EvmChainId.BOBA],
  },
  [EvmChainId.BOBA_BNB]: {
    BOBA: getEvmNativeByChainId(EvmChainId.BOBA_BNB),
    WBOBA: WNATIVE[EvmChainId.BOBA_BNB],
    USDC: USDC[EvmChainId.BOBA_BNB],
    BNB: createEvmToken({
      chainId: EvmChainId.BOBA_BNB,
      symbol: 'BNB',
      name: 'Binance Coin',
      decimals: 18,
      address: '0x4200000000000000000000000000000000000023',
    }),
    // SUSHI: SUSHI[EvmChainId.BOBA_BNB],
  },
  [EvmChainId.BSC]: {
    // NATIVE: getEvmNativeByChainId(EvmChainId.BSC),
    // WNATIVE: WNATIVE[EvmChainId.BSC],
    BNB: getEvmNativeByChainId(EvmChainId.BSC),
    WBNB: WNATIVE[EvmChainId.BSC],
    ETH: WETH9[EvmChainId.BSC],
    WETH: WETH9[EvmChainId.BSC],
    USDC: USDC[EvmChainId.BSC],
    USDT: USDT[EvmChainId.BSC],
    DAI: DAI[EvmChainId.BSC],
    FRAX: FRAX[EvmChainId.BSC],
    MIM: MIM[EvmChainId.BSC],
    SUSHI: SUSHI[EvmChainId.BSC],
    MAI: MAI[EvmChainId.BSC],
    UNI: UNI[EvmChainId.BSC],
    AGEUR: AGEUR[EvmChainId.BSC],
  },
  [EvmChainId.BTTC]: {
    BTT: getEvmNativeByChainId(EvmChainId.BTTC),
    WBTT: WNATIVE[EvmChainId.BTTC],
    SUSHI: SUSHI[EvmChainId.BTTC],
  },
  [EvmChainId.CELO]: {
    CELO: getEvmNativeByChainId(EvmChainId.CELO),
    WCELO: WNATIVE[EvmChainId.CELO],
    SUSHI: SUSHI[EvmChainId.CELO],
    AGEUR: AGEUR[EvmChainId.CELO],
  },
  [EvmChainId.ETHEREUM]: {
    // NATIVE: getEvmNativeByChainId(EvmChainId.ETHEREUM),
    // WNATIVE: WETH9[EvmChainId.ETHEREUM],
    ETH: getEvmNativeByChainId(EvmChainId.ETHEREUM),
    WETH: WETH9[EvmChainId.ETHEREUM],
    WBTC: WBTC[EvmChainId.ETHEREUM],
    USDC: USDC[EvmChainId.ETHEREUM],
    USDT: USDT[EvmChainId.ETHEREUM],
    DAI: DAI[EvmChainId.ETHEREUM],
    FRAX: FRAX[EvmChainId.ETHEREUM],
    MIM: MIM[EvmChainId.ETHEREUM],
    SUSHI: SUSHI[EvmChainId.ETHEREUM],
    MAI: MAI[EvmChainId.ETHEREUM],
    UNI: UNI[EvmChainId.ETHEREUM],
    LUSD: LUSD[EvmChainId.ETHEREUM],
    AGEUR: AGEUR[EvmChainId.ETHEREUM],
  },
  [EvmChainId.FANTOM]: {
    // NATIVE: getEvmNativeByChainId(EvmChainId.FANTOM),
    // WNATIVE: WNATIVE[EvmChainId.FANTOM],
    FTM: getEvmNativeByChainId(EvmChainId.FANTOM),
    WFTM: WNATIVE[EvmChainId.FANTOM],
    FRAX: FRAX[EvmChainId.FANTOM],
    MIM: MIM[EvmChainId.FANTOM],
    SUSHI: SUSHI[EvmChainId.FANTOM],
    MAI: MAI[EvmChainId.FANTOM],
  },
  [EvmChainId.GNOSIS]: {
    XDAI: getEvmNativeByChainId(EvmChainId.GNOSIS),
    WXDAI: WNATIVE[EvmChainId.GNOSIS],
    SUSHI: SUSHI[EvmChainId.GNOSIS],
    AGEUR: AGEUR[EvmChainId.GNOSIS],
  },
  [EvmChainId.KAVA]: {
    KAVA: getEvmNativeByChainId(EvmChainId.KAVA),
    WKAVA: WNATIVE[EvmChainId.KAVA],
    SUSHI: SUSHI[EvmChainId.KAVA],
  },
  [EvmChainId.METIS]: {
    METIS: getEvmNativeByChainId(EvmChainId.METIS),
    WMETIS: WNATIVE[EvmChainId.METIS],
    SUSHI: SUSHI[EvmChainId.METIS],
  },
  [EvmChainId.OPTIMISM]: {
    // NATIVE: getEvmNativeByChainId(EvmChainId.OPTIMISM),
    // WNATIVE: WNATIVE[EvmChainId.OPTIMISM],
    ETH: getEvmNativeByChainId(EvmChainId.OPTIMISM),
    WETH: WNATIVE[EvmChainId.OPTIMISM],
    USDC: USDC[EvmChainId.OPTIMISM],
    USDT: USDT[EvmChainId.OPTIMISM],
    OP: OP[EvmChainId.OPTIMISM],
    SUSHI: SUSHI[EvmChainId.OPTIMISM],
    AGEUR: AGEUR[EvmChainId.OPTIMISM],
  },
  [EvmChainId.POLYGON]: {
    // NATIVE: getEvmNativeByChainId(EvmChainId.POLYGON),
    // WNATIVE: WNATIVE[EvmChainId.POLYGON],
    MATIC: getEvmNativeByChainId(EvmChainId.POLYGON),
    WMATIC: WNATIVE[EvmChainId.POLYGON],
    ETH: WETH9[EvmChainId.POLYGON],
    WETH: WETH9[EvmChainId.POLYGON],
    WBTC: WBTC[EvmChainId.POLYGON],
    USDC: USDC[EvmChainId.POLYGON],
    USDT: USDT[EvmChainId.POLYGON],
    DAI: DAI[EvmChainId.POLYGON],
    FRAX: FRAX[EvmChainId.POLYGON],
    MIM: MIM[EvmChainId.POLYGON],
    SUSHI: SUSHI[EvmChainId.POLYGON],
    MAI: MAI[EvmChainId.POLYGON],
    UNI: UNI[EvmChainId.POLYGON],
    AGEUR: AGEUR[EvmChainId.POLYGON],
  },
  [EvmChainId.HARMONY]: {
    ONE: getEvmNativeByChainId(EvmChainId.HARMONY),
    WONE: WNATIVE[EvmChainId.HARMONY],
    SUSHI: SUSHI[EvmChainId.HARMONY],
  },
  // [EvmChainId.SCROLL_ALPHA_TESTNET]: {
  //   ETH: getEvmNativeByChainId(EvmChainId.SCROLL_ALPHA_TESTNET),
  //   WETH: WNATIVE[EvmChainId.SCROLL_ALPHA_TESTNET],
  // },
  // [EvmChainId.CONSENSUS_ZKEVM_TESTNET]: {
  //   ETH: getEvmNativeByChainId(EvmChainId.CONSENSUS_ZKEVM_TESTNET),
  //   WETH: WNATIVE[EvmChainId.CONSENSUS_ZKEVM_TESTNET],
  // },
  // [EvmChainId.BASE_TESTNET]: {
  //   ETH: getEvmNativeByChainId(EvmChainId.BASE_TESTNET),
  //   WETH: WNATIVE[EvmChainId.BASE_TESTNET],
  // },
  [EvmChainId.THUNDERCORE]: {
    NATIVE: getEvmNativeByChainId(EvmChainId.THUNDERCORE),
    WNATIVE: WNATIVE[EvmChainId.THUNDERCORE],
    SUSHI: SUSHI[EvmChainId.THUNDERCORE],
  },
  [EvmChainId.POLYGON_ZKEVM]: {
    NATIVE: getEvmNativeByChainId(EvmChainId.POLYGON_ZKEVM),
    WNATIVE: WNATIVE[EvmChainId.POLYGON_ZKEVM],
    ETH: getEvmNativeByChainId(EvmChainId.POLYGON_ZKEVM),
    WETH: WNATIVE[EvmChainId.POLYGON_ZKEVM],
  },
  [EvmChainId.CORE]: {
    NATIVE: getEvmNativeByChainId(EvmChainId.CORE),
    WNATIVE: WNATIVE[EvmChainId.CORE],
    ETH: WETH9[EvmChainId.CORE],
    WETH: WETH9[EvmChainId.CORE],
  },
  [EvmChainId.HAQQ]: {
    NATIVE: getEvmNativeByChainId(EvmChainId.HAQQ),
    WNATIVE: WNATIVE[EvmChainId.HAQQ],
    ETH: WETH9[EvmChainId.HAQQ],
    WETH: WETH9[EvmChainId.HAQQ],
  },
  [EvmChainId.ZKSYNC_ERA]: {
    NATIVE: getEvmNativeByChainId(EvmChainId.ZKSYNC_ERA),
    WNATIVE: WNATIVE[EvmChainId.ZKSYNC_ERA],
    ETH: getEvmNativeByChainId(EvmChainId.ZKSYNC_ERA),
    WETH: WNATIVE[EvmChainId.ZKSYNC_ERA],
  },
  [EvmChainId.LINEA]: {
    NATIVE: getEvmNativeByChainId(EvmChainId.LINEA),
    WNATIVE: WNATIVE[EvmChainId.LINEA],
    ETH: getEvmNativeByChainId(EvmChainId.LINEA),
    WETH: WNATIVE[EvmChainId.LINEA],
  },
  [EvmChainId.BASE]: {
    NATIVE: getEvmNativeByChainId(EvmChainId.BASE),
    WNATIVE: WNATIVE[EvmChainId.BASE],
    ETH: getEvmNativeByChainId(EvmChainId.BASE),
    WETH: WNATIVE[EvmChainId.BASE],
  },
  [EvmChainId.SCROLL]: {
    NATIVE: getEvmNativeByChainId(EvmChainId.SCROLL),
    WNATIVE: WNATIVE[EvmChainId.SCROLL],
    ETH: getEvmNativeByChainId(EvmChainId.SCROLL),
    WETH: WNATIVE[EvmChainId.SCROLL],
  },
  [EvmChainId.FILECOIN]: {
    NATIVE: getEvmNativeByChainId(EvmChainId.FILECOIN),
    WNATIVE: WNATIVE[EvmChainId.FILECOIN],
  },
  [EvmChainId.ZETACHAIN]: {
    NATIVE: getEvmNativeByChainId(EvmChainId.ZETACHAIN),
    WNATIVE: WNATIVE[EvmChainId.ZETACHAIN],
  },
  [EvmChainId.BLAST]: {
    NATIVE: getEvmNativeByChainId(EvmChainId.BLAST),
    WNATIVE: WNATIVE[EvmChainId.BLAST],
    USDB: USDB[EvmChainId.BLAST],
  },
  [EvmChainId.SKALE_EUROPA]: {
    SKL: SKL,
    ETH: WETH9[EvmChainId.SKALE_EUROPA],
    USDC: USDC[EvmChainId.SKALE_EUROPA],
  },
  [EvmChainId.ROOTSTOCK]: {
    NATIVE: getEvmNativeByChainId(EvmChainId.ROOTSTOCK),
    WNATIVE: WNATIVE[EvmChainId.ROOTSTOCK],
    WBTC: getEvmNativeByChainId(EvmChainId.ROOTSTOCK),
    WETH: WETH9[EvmChainId.ROOTSTOCK],
  },
} as const

export type ShortCurrencyNameChainId =
  keyof typeof CHAIN_ID_SHORT_CURRENCY_NAME_TO_CURRENCY

export type ShortCurrencyName =
  keyof (typeof CHAIN_ID_SHORT_CURRENCY_NAME_TO_CURRENCY)[ShortCurrencyNameChainId]

export const isShortCurrencyNameSupported = (
  chainId: EvmChainId,
): chainId is ShortCurrencyNameChainId =>
  chainId in CHAIN_ID_SHORT_CURRENCY_NAME_TO_CURRENCY

export const isShortCurrencyName = (
  chainId: EvmChainId,
  shortCurrencyName: string,
): shortCurrencyName is ShortCurrencyName => {
  return (
    isShortCurrencyNameSupported(chainId) &&
    shortCurrencyName in CHAIN_ID_SHORT_CURRENCY_NAME_TO_CURRENCY[chainId]
  )
}

export const currencyFromShortCurrencyName = (
  chainId: EvmChainId,
  shortCurrencyName: ShortCurrencyName,
): EvmCurrency => {
  if (!isShortCurrencyNameSupported(chainId))
    throw new Error(
      `Unsupported chain id ${chainId} for short currency name ${shortCurrencyName}`,
    )
  if (!(shortCurrencyName in CHAIN_ID_SHORT_CURRENCY_NAME_TO_CURRENCY[chainId]))
    throw new Error(
      `Unsupported short currency name ${shortCurrencyName} on chain ${chainId}`,
    )
  return CHAIN_ID_SHORT_CURRENCY_NAME_TO_CURRENCY[chainId][shortCurrencyName]
}
