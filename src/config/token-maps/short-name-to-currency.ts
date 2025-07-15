import { EvmChainId } from '../../chain/evm/index.js'
import {
  AGEUR,
  DAI,
  FRAX,
  LUSD,
  MAI,
  MIM,
  Native,
  OP,
  SKL,
  SUSHI,
  Token,
  type Type,
  UNI,
  USDB,
  USDC,
  USDT,
  WBTC,
  WETH9,
  WNATIVE,
} from '../../currency/index.js'

const CHAIN_ID_SHORT_CURRENCY_NAME_TO_CURRENCY = {
  [EvmChainId.ARBITRUM]: {
    // NATIVE: Native.onChain(EvmChainId.ARBITRUM),
    // WNATIVE: WNATIVE[EvmChainId.ARBITRUM],
    ETH: Native.onChain(EvmChainId.ARBITRUM),
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
    ETH: Native.onChain(EvmChainId.ARBITRUM_NOVA),
    WETH: WNATIVE[EvmChainId.ARBITRUM_NOVA],
    SUSHI: SUSHI[EvmChainId.ARBITRUM_NOVA],
  },
  [EvmChainId.AVALANCHE]: {
    // NATIVE: Native.onChain(EvmChainId.AVALANCHE),
    // WNATIVE: WNATIVE[EvmChainId.AVALANCHE],
    AVAX: Native.onChain(EvmChainId.AVALANCHE),
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
    ETH: Native.onChain(EvmChainId.BOBA),
    WETH: WNATIVE[EvmChainId.BOBA],
    SUSHI: SUSHI[EvmChainId.BOBA],
  },
  [EvmChainId.BOBA_BNB]: {
    BOBA: Native.onChain(EvmChainId.BOBA_BNB),
    WBOBA: WNATIVE[EvmChainId.BOBA_BNB],
    USDC: USDC[EvmChainId.BOBA_BNB],
    BNB: new Token({
      chainId: EvmChainId.BOBA_BNB,
      symbol: 'BNB',
      name: 'Binance Coin',
      decimals: 18,
      address: '0x4200000000000000000000000000000000000023',
    }),
    // SUSHI: SUSHI[EvmChainId.BOBA_BNB],
  },
  [EvmChainId.BSC]: {
    // NATIVE: Native.onChain(EvmChainId.BSC),
    // WNATIVE: WNATIVE[EvmChainId.BSC],
    BNB: Native.onChain(EvmChainId.BSC),
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
    BTT: Native.onChain(EvmChainId.BTTC),
    WBTT: WNATIVE[EvmChainId.BTTC],
    SUSHI: SUSHI[EvmChainId.BTTC],
  },
  [EvmChainId.CELO]: {
    CELO: Native.onChain(EvmChainId.CELO),
    WCELO: WNATIVE[EvmChainId.CELO],
    SUSHI: SUSHI[EvmChainId.CELO],
    AGEUR: AGEUR[EvmChainId.CELO],
  },
  [EvmChainId.ETHEREUM]: {
    // NATIVE: Native.onChain(EvmChainId.ETHEREUM),
    // WNATIVE: WETH9[EvmChainId.ETHEREUM],
    ETH: Native.onChain(EvmChainId.ETHEREUM),
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
    // NATIVE: Native.onChain(EvmChainId.FANTOM),
    // WNATIVE: WNATIVE[EvmChainId.FANTOM],
    FTM: Native.onChain(EvmChainId.FANTOM),
    WFTM: WNATIVE[EvmChainId.FANTOM],
    FRAX: FRAX[EvmChainId.FANTOM],
    MIM: MIM[EvmChainId.FANTOM],
    SUSHI: SUSHI[EvmChainId.FANTOM],
    MAI: MAI[EvmChainId.FANTOM],
  },
  [EvmChainId.FUSE]: {
    FUSE: Native.onChain(EvmChainId.FUSE),
    WFUSE: WNATIVE[EvmChainId.FUSE],
    SUSHI: SUSHI[EvmChainId.FUSE],
  },
  [EvmChainId.GNOSIS]: {
    XDAI: Native.onChain(EvmChainId.GNOSIS),
    WXDAI: WNATIVE[EvmChainId.GNOSIS],
    SUSHI: SUSHI[EvmChainId.GNOSIS],
    AGEUR: AGEUR[EvmChainId.GNOSIS],
  },
  [EvmChainId.KAVA]: {
    KAVA: Native.onChain(EvmChainId.KAVA),
    WKAVA: WNATIVE[EvmChainId.KAVA],
    SUSHI: SUSHI[EvmChainId.KAVA],
  },
  [EvmChainId.METIS]: {
    METIS: Native.onChain(EvmChainId.METIS),
    WMETIS: WNATIVE[EvmChainId.METIS],
    SUSHI: SUSHI[EvmChainId.METIS],
  },
  [EvmChainId.MOONBEAM]: {
    GLMR: Native.onChain(EvmChainId.MOONBEAM),
    WGLMR: WNATIVE[EvmChainId.MOONBEAM],
    SUSHI: SUSHI[EvmChainId.MOONBEAM],
  },
  [EvmChainId.MOONRIVER]: {
    MOVR: Native.onChain(EvmChainId.MOONRIVER),
    WMOVR: WNATIVE[EvmChainId.MOONRIVER],
    SUSHI: SUSHI[EvmChainId.MOONRIVER],
  },

  [EvmChainId.OPTIMISM]: {
    // NATIVE: Native.onChain(EvmChainId.OPTIMISM),
    // WNATIVE: WNATIVE[EvmChainId.OPTIMISM],
    ETH: Native.onChain(EvmChainId.OPTIMISM),
    WETH: WNATIVE[EvmChainId.OPTIMISM],
    USDC: USDC[EvmChainId.OPTIMISM],
    USDT: USDT[EvmChainId.OPTIMISM],
    OP: OP[EvmChainId.OPTIMISM],
    SUSHI: SUSHI[EvmChainId.OPTIMISM],
    AGEUR: AGEUR[EvmChainId.OPTIMISM],
  },
  [EvmChainId.POLYGON]: {
    // NATIVE: Native.onChain(EvmChainId.POLYGON),
    // WNATIVE: WNATIVE[EvmChainId.POLYGON],
    MATIC: Native.onChain(EvmChainId.POLYGON),
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
    ONE: Native.onChain(EvmChainId.HARMONY),
    WONE: WNATIVE[EvmChainId.HARMONY],
    SUSHI: SUSHI[EvmChainId.HARMONY],
  },
  // [EvmChainId.SCROLL_ALPHA_TESTNET]: {
  //   ETH: Native.onChain(EvmChainId.SCROLL_ALPHA_TESTNET),
  //   WETH: WNATIVE[EvmChainId.SCROLL_ALPHA_TESTNET],
  // },
  // [EvmChainId.CONSENSUS_ZKEVM_TESTNET]: {
  //   ETH: Native.onChain(EvmChainId.CONSENSUS_ZKEVM_TESTNET),
  //   WETH: WNATIVE[EvmChainId.CONSENSUS_ZKEVM_TESTNET],
  // },
  // [EvmChainId.BASE_TESTNET]: {
  //   ETH: Native.onChain(EvmChainId.BASE_TESTNET),
  //   WETH: WNATIVE[EvmChainId.BASE_TESTNET],
  // },
  [EvmChainId.THUNDERCORE]: {
    NATIVE: Native.onChain(EvmChainId.THUNDERCORE),
    WNATIVE: WNATIVE[EvmChainId.THUNDERCORE],
    SUSHI: SUSHI[EvmChainId.THUNDERCORE],
  },
  [EvmChainId.POLYGON_ZKEVM]: {
    NATIVE: Native.onChain(EvmChainId.POLYGON_ZKEVM),
    WNATIVE: WNATIVE[EvmChainId.POLYGON_ZKEVM],
    ETH: Native.onChain(EvmChainId.POLYGON_ZKEVM),
    WETH: WNATIVE[EvmChainId.POLYGON_ZKEVM],
  },
  [EvmChainId.CORE]: {
    NATIVE: Native.onChain(EvmChainId.CORE),
    WNATIVE: WNATIVE[EvmChainId.CORE],
    ETH: WETH9[EvmChainId.CORE],
    WETH: WETH9[EvmChainId.CORE],
  },
  [EvmChainId.HAQQ]: {
    NATIVE: Native.onChain(EvmChainId.HAQQ),
    WNATIVE: WNATIVE[EvmChainId.HAQQ],
    ETH: WETH9[EvmChainId.HAQQ],
    WETH: WETH9[EvmChainId.HAQQ],
  },
  [EvmChainId.ZKSYNC_ERA]: {
    NATIVE: Native.onChain(EvmChainId.ZKSYNC_ERA),
    WNATIVE: WNATIVE[EvmChainId.ZKSYNC_ERA],
    ETH: Native.onChain(EvmChainId.ZKSYNC_ERA),
    WETH: WNATIVE[EvmChainId.ZKSYNC_ERA],
  },
  [EvmChainId.LINEA]: {
    NATIVE: Native.onChain(EvmChainId.LINEA),
    WNATIVE: WNATIVE[EvmChainId.LINEA],
    ETH: Native.onChain(EvmChainId.LINEA),
    WETH: WNATIVE[EvmChainId.LINEA],
  },
  [EvmChainId.BASE]: {
    NATIVE: Native.onChain(EvmChainId.BASE),
    WNATIVE: WNATIVE[EvmChainId.BASE],
    ETH: Native.onChain(EvmChainId.BASE),
    WETH: WNATIVE[EvmChainId.BASE],
  },
  [EvmChainId.SCROLL]: {
    NATIVE: Native.onChain(EvmChainId.SCROLL),
    WNATIVE: WNATIVE[EvmChainId.SCROLL],
    ETH: Native.onChain(EvmChainId.SCROLL),
    WETH: WNATIVE[EvmChainId.SCROLL],
  },
  [EvmChainId.FILECOIN]: {
    NATIVE: Native.onChain(EvmChainId.FILECOIN),
    WNATIVE: WNATIVE[EvmChainId.FILECOIN],
  },
  [EvmChainId.ZETACHAIN]: {
    NATIVE: Native.onChain(EvmChainId.ZETACHAIN),
    WNATIVE: WNATIVE[EvmChainId.ZETACHAIN],
  },
  [EvmChainId.BLAST]: {
    NATIVE: Native.onChain(EvmChainId.BLAST),
    WNATIVE: WNATIVE[EvmChainId.BLAST],
    USDB: USDB[EvmChainId.BLAST],
  },
  [EvmChainId.SKALE_EUROPA]: {
    SKL: SKL,
    ETH: WETH9[EvmChainId.SKALE_EUROPA],
    USDC: USDC[EvmChainId.SKALE_EUROPA],
  },
  [EvmChainId.ROOTSTOCK]: {
    NATIVE: Native.onChain(EvmChainId.ROOTSTOCK),
    WNATIVE: WNATIVE[EvmChainId.ROOTSTOCK],
    WBTC: Native.onChain(EvmChainId.ROOTSTOCK),
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
): Type => {
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
