import { EvmChainId } from '../chain/evm/index.js'
import {
  AAVE_ADDRESS,
  AGEUR_ADDRESS,
  AMPL_ADDRESS,
  ANKR_ADDRESS,
  APE_ADDRESS,
  APE_ETH_ADDRESS,
  APE_USD_ADDRESS,
  ARB_ADDRESS,
  AUSD_ADDRESS,
  BAL_ADDRESS,
  BCT_ADDRESS,
  BUSD_ADDRESS,
  COMP_ADDRESS,
  CRV_ADDRESS,
  DAI_ADDRESS,
  ENJ_ADDRESS,
  FEI_ADDRESS,
  FRAX_ADDRESS,
  FXS_ADDRESS,
  GALA_ADDRESS,
  GNO_ADDRESS,
  GNS_ADDRESS,
  GRT_ADDRESS,
  JPY_ADDRESS,
  JUGNI_ADDRESS,
  KLIMA_ADDRESS,
  KNCv2_ADDRESS,
  KP3R_ADDRESS,
  LDO_ADDRESS,
  LINK_ADDRESS,
  LUSD_ADDRESS,
  MAI_ADDRESS,
  MANA_ADDRESS,
  MATIC_ADDRESS,
  METH_ADDRESS,
  MIM_ADDRESS,
  MKR_ADDRESS,
  NFTX_ADDRESS,
  OCEAN_ADDRESS,
  OHM_ADDRESS,
  OPTICS_USDC_ADDRESS,
  OP_ADDRESS,
  PRIMATE_ADDRESS,
  QUICK_ADDRESS,
  RNDR_ADDRESS,
  SAND_ADDRESS,
  SNX_ADDRESS,
  STG_ADDRESS,
  STONE_ADDRESS,
  SUSHI_ADDRESS,
  SWISE_ADDRESS,
  SolvBTC_ADDRESS,
  TEL_ADDRESS,
  TRIBE_ADDRESS,
  TUSD_ADDRESS,
  UDSP_ADDRESS,
  UNI_ADDRESS,
  USDB_ADDRESS,
  USDC_ADDRESS,
  USDPLUS_ADDRESS,
  USDT0_ADDRESS,
  USDT_ADDRESS,
  USD_PLUS_ADDRESS,
  USDe_ADDRESS,
  WAVAX_ADDRESS,
  WBTC_ADDRESS,
  WETH9_ADDRESS,
  WNATIVE_ADDRESS,
  WORMHOLE_USDC_ADDRESS,
  WORMHOLE_WBTC_ADDRESS,
  WORMHOLE_WETH_ADDRESS,
  WstETH_ADDRESS,
  XSUSHI_ADDRESS,
  YFI_ADDRESS,
  axlDAI_ADDRESS,
  axlETH_ADDRESS,
  axlUSDC_ADDRESS,
  axlUSDT_ADDRESS,
  axlWBTC_ADDRESS,
  rETH2_ADDRESS,
  rETH_ADDRESS,
  renBTC_ADDRESS,
  sETH2_ADDRESS,
  xSolvBTC_ADDRESS,
} from './token-addresses.js'
import { Token } from './token.js'

function addressMapToTokenMap(
  {
    decimals,
    symbol,
    name,
  }: {
    decimals: number | string
    symbol?: string | undefined
    name?: string | undefined
  },
  map: Partial<Record<EvmChainId, string>>,
) {
  return Object.fromEntries(
    Object.entries(map).map(([chainId, address]) => [
      chainId,
      new Token({
        chainId: Number(chainId) as EvmChainId,
        address,
        decimals,
        symbol,
        name,
      }),
    ]),
  )
}

export const AMPL = addressMapToTokenMap(
  { decimals: 9, symbol: 'AMPL', name: 'Ampleforth' },
  AMPL_ADDRESS,
)

export const SAND = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'SAND',
    name: 'SAND',
  },
  SAND_ADDRESS,
) as Record<keyof typeof SAND_ADDRESS, Token>

export const STG = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'STG',
    name: 'StargateToken',
  },
  STG_ADDRESS,
) as Record<keyof typeof STG_ADDRESS, Token>

export const GNS = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'GNS',
    name: 'Gains Network',
  },
  GNS_ADDRESS,
) as Record<keyof typeof GNS_ADDRESS, Token>

export const MANA = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'MANA',
    name: 'Decentraland',
  },
  MANA_ADDRESS,
) as Record<keyof typeof MANA_ADDRESS, Token>

export const MKR = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'MKR',
    name: 'Maker',
  },
  MKR_ADDRESS,
) as Record<keyof typeof MKR_ADDRESS, Token>

export const YFI = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'YFI',
    name: 'yearn.finance',
  },
  YFI_ADDRESS,
) as Record<keyof typeof YFI_ADDRESS, Token>

export const ENJ = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'ENJ',
    name: 'Enjin Coin',
  },
  ENJ_ADDRESS,
) as Record<keyof typeof ENJ_ADDRESS, Token>

export const CRV = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'CRV',
    name: 'Curve DAO Token',
  },
  CRV_ADDRESS,
) as Record<keyof typeof CRV_ADDRESS, Token>

export const SNX = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'SNX',
    name: 'Synthetix Network Token',
  },
  SNX_ADDRESS,
) as Record<keyof typeof SNX_ADDRESS, Token>

export const GALA = addressMapToTokenMap(
  {
    decimals: 8,
    symbol: 'GALA',
    name: 'Gala',
  },
  GALA_ADDRESS,
) as Record<keyof typeof GALA_ADDRESS, Token>

export const MATIC = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'MATIC',
    name: 'Matic Token',
  },
  MATIC_ADDRESS,
) as Record<keyof typeof MATIC_ADDRESS, Token>

export const GNO = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'GNO',
    name: 'Gnosis Token',
  },
  GNO_ADDRESS,
) as Record<keyof typeof GNO_ADDRESS, Token>

export const ARB = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'ARB',
    name: 'Arbitrum',
  },
  ARB_ADDRESS,
) as Record<keyof typeof ARB_ADDRESS, Token>

export const KP3R = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'KP3R',
    name: 'Keep3rV1',
  },
  KP3R_ADDRESS,
) as Record<keyof typeof KP3R_ADDRESS, Token>

export const LDO = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'LDO',
    name: 'Lido DAO Token',
  },
  LDO_ADDRESS,
) as Record<keyof typeof LDO_ADDRESS, Token>

export const APE = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'APE',
    name: 'ApeCoin',
  },
  APE_ADDRESS,
) as Record<keyof typeof APE_ADDRESS, Token>

export const PRIMATE = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'PRIMATE',
    name: 'PRIMATE',
  },
  PRIMATE_ADDRESS,
) as Record<keyof typeof PRIMATE_ADDRESS, Token>

export const rETH = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'rETH',
    name: 'Rocket Pool ETH',
  },
  rETH_ADDRESS,
) as Record<keyof typeof rETH_ADDRESS, Token>

export const rETH2 = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'rETH2',
    name: 'StakeWise Reward ETH2',
  },
  rETH2_ADDRESS,
) as Record<keyof typeof rETH2_ADDRESS, Token>

export const sETH2 = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'sETH2',
    name: 'StakeWise Staked ETH2',
  },
  sETH2_ADDRESS,
) as Record<keyof typeof sETH2_ADDRESS, Token>

export const SWISE = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'SWISE',
    name: 'StakeWise',
  },
  SWISE_ADDRESS,
) as Record<keyof typeof SWISE_ADDRESS, Token>

export const FEI = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'FEI',
    name: 'Fei USD',
  },
  FEI_ADDRESS,
) as Record<keyof typeof FEI_ADDRESS, Token>

export const TRIBE = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'TRIBE',
    name: 'Tribe',
  },
  TRIBE_ADDRESS,
) as Record<keyof typeof TRIBE_ADDRESS, Token>

export const renBTC = addressMapToTokenMap(
  {
    decimals: 8,
    symbol: 'renBTC',
    name: 'renBTC',
  },
  renBTC_ADDRESS,
) as Record<keyof typeof renBTC_ADDRESS, Token>

export const NFTX = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'NFTX',
    name: 'NFTX',
  },
  NFTX_ADDRESS,
) as Record<keyof typeof NFTX_ADDRESS, Token>

export const OHM = addressMapToTokenMap(
  {
    decimals: 9,
    symbol: 'OHM',
    name: 'Olympus',
  },
  OHM_ADDRESS,
) as Record<keyof typeof OHM_ADDRESS, Token>

export const WBTC = {
  ...(addressMapToTokenMap(
    {
      decimals: 8,
      symbol: 'WBTC',
      name: 'Wrapped BTC',
    },
    WBTC_ADDRESS,
  ) as Omit<
    Record<keyof typeof WBTC_ADDRESS, Token>,
    typeof EvmChainId.ROOTSTOCK
  >),
  [EvmChainId.ROOTSTOCK]: new Token({
    chainId: EvmChainId.ROOTSTOCK,
    address: WBTC_ADDRESS[EvmChainId.ROOTSTOCK],
    decimals: 18,
    name: 'Wrapped BTC',
    symbol: 'WRBTC',
  }),
}

export const UNI = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'UNI',
    name: 'Uniswap',
  },
  UNI_ADDRESS,
) as Record<keyof typeof UNI_ADDRESS, Token>

export const BUSD = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'BUSD',
    name: 'BUSD Token',
  },
  BUSD_ADDRESS,
) as Record<keyof typeof BUSD_ADDRESS, Token>

export const MAI = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'MAI',
    name: 'Mai Stablecoin',
  },
  MAI_ADDRESS,
) as Record<keyof typeof MAI_ADDRESS, Token>

export const TUSD = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'TUSD',
    name: 'TrueUSD',
  },
  TUSD_ADDRESS,
) as Record<keyof typeof TUSD_ADDRESS, Token>

export const AGEUR = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'agEUR',
    name: 'agEUR',
  },
  AGEUR_ADDRESS,
) as Record<keyof typeof AGEUR_ADDRESS, Token>

export const ANKR = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'ANKR',
    name: 'Anker Network',
  },
  ANKR_ADDRESS,
) as Record<keyof typeof ANKR_ADDRESS, Token>

export const AAVE = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'AAVE',
    name: 'Aave Token',
  },
  AAVE_ADDRESS,
) as Record<keyof typeof AAVE_ADDRESS, Token>

export const COMP = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'COMP',
    name: 'Compound ',
  },
  COMP_ADDRESS,
) as Record<keyof typeof COMP_ADDRESS, Token>

export const JPY = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'JPYC',
    name: 'JPY Coin',
  },
  JPY_ADDRESS,
) as Record<keyof typeof JPY_ADDRESS, Token>

export const LUSD = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'LUSD',
    name: 'LUSD Stablecoin',
  },
  LUSD_ADDRESS,
) as Record<keyof typeof LUSD_ADDRESS, Token>

export const WETH9 = {
  ...(addressMapToTokenMap(
    {
      decimals: 18,
      symbol: 'WETH',
      name: 'Wrapped Ether',
    },
    WETH9_ADDRESS,
  ) as Omit<
    Record<keyof typeof WETH9_ADDRESS, Token>,
    typeof EvmChainId.SKALE_EUROPA
  >),
  [EvmChainId.SKALE_EUROPA]: new Token({
    chainId: EvmChainId.SKALE_EUROPA,
    address: WETH9_ADDRESS[EvmChainId.SKALE_EUROPA],
    decimals: 18,
    symbol: 'ETH',
    name: 'Ether',
  }),
}

export const WNATIVE = {
  [EvmChainId.ETHEREUM]: WETH9[EvmChainId.ETHEREUM],
  [EvmChainId.SEPOLIA]: WETH9[EvmChainId.SEPOLIA],
  // [EvmChainId.ROPSTEN]: WETH9[EvmChainId.ROPSTEN],
  // [EvmChainId.RINKEBY]: WETH9[EvmChainId.RINKEBY],
  // [EvmChainId.GÖRLI]: WETH9[EvmChainId.GÖRLI],
  // [EvmChainId.KOVAN]: WETH9[EvmChainId.KOVAN],
  [EvmChainId.OPTIMISM]: WETH9[EvmChainId.OPTIMISM],
  [EvmChainId.FANTOM]: new Token({
    chainId: EvmChainId.FANTOM,
    address: WNATIVE_ADDRESS[EvmChainId.FANTOM],
    decimals: 18,
    symbol: 'WFTM',
    name: 'Wrapped FTM',
  }),
  // [EvmChainId.FANTOM_TESTNET]: new Token({
  //   chainId: EvmChainId.FANTOM_TESTNET,
  //   address: WNATIVE_ADDRESS[EvmChainId.FANTOM_TESTNET],
  //   decimals: 18,
  //   symbol: 'WFTM',
  //   name: 'Wrapped FTM',
  // }),
  [EvmChainId.POLYGON]: new Token({
    chainId: EvmChainId.POLYGON,
    address: WNATIVE_ADDRESS[EvmChainId.POLYGON],
    decimals: 18,
    symbol: 'WPOL',
    name: 'Wrapped POL',
  }),
  // [EvmChainId.POLYGON_TESTNET]: new Token({
  //   chainId: EvmChainId.POLYGON_TESTNET,
  //   address: WNATIVE_ADDRESS[EvmChainId.POLYGON_TESTNET],
  //   decimals: 18,
  //   symbol: 'WPOL',
  //   name: 'Wrapped POL',
  // }),
  [EvmChainId.GNOSIS]: new Token({
    chainId: EvmChainId.GNOSIS,
    address: WNATIVE_ADDRESS[EvmChainId.GNOSIS],
    decimals: 18,
    symbol: 'WXDAI',
    name: 'Wrapped xDai',
  }),
  [EvmChainId.BSC]: new Token({
    chainId: EvmChainId.BSC,
    address: WNATIVE_ADDRESS[EvmChainId.BSC],
    decimals: 18,
    symbol: 'WBNB',
    name: 'Wrapped BNB',
  }),
  // [EvmChainId.BSC_TESTNET]: new Token({
  //   chainId: EvmChainId.BSC_TESTNET,
  //   address: WNATIVE_ADDRESS[EvmChainId.BSC_TESTNET],
  //   decimals: 18,
  //   symbol: 'WBNB',
  //   name: 'Wrapped BNB',
  // }),
  [EvmChainId.ARBITRUM]: WETH9[EvmChainId.ARBITRUM],
  // [EvmChainId.ARBITRUM_TESTNET]: WETH9[EvmChainId.ARBITRUM_TESTNET],
  [EvmChainId.ARBITRUM_NOVA]: WETH9[EvmChainId.ARBITRUM_NOVA],
  [EvmChainId.AVALANCHE]: new Token({
    chainId: EvmChainId.AVALANCHE,
    address: WNATIVE_ADDRESS[EvmChainId.AVALANCHE],
    decimals: 18,
    symbol: 'WAVAX',
    name: 'Wrapped AVAX',
  }),
  // [EvmChainId.AVALANCHE_TESTNET]: new Token({
  //   chainId: EvmChainId.AVALANCHE_TESTNET,
  //   address: WNATIVE_ADDRESS[EvmChainId.AVALANCHE_TESTNET],
  //   decimals: 18,
  //   symbol: 'WAVAX',
  //   name: 'Wrapped AVAX',
  // }),
  // [EvmChainId.HECO]: new Token({
  //   chainId: EvmChainId.HECO,
  //   address: WNATIVE_ADDRESS[EvmChainId.HECO],
  //   decimals: 18,
  //   symbol: 'WHT',
  //   name: 'Wrapped HT',
  // }),
  // [EvmChainId.HECO_TESTNET]: new Token({
  //   chainId: EvmChainId.HECO_TESTNET,
  //   address: WNATIVE_ADDRESS[EvmChainId.HECO_TESTNET],
  //   decimals: 18,
  //   symbol: 'WHT',
  //   name: 'Wrapped HT',
  // }),
  [EvmChainId.HARMONY]: new Token({
    chainId: EvmChainId.HARMONY,
    address: WNATIVE_ADDRESS[EvmChainId.HARMONY],
    decimals: 18,
    symbol: 'WONE',
    name: 'Wrapped ONE',
  }),
  // [EvmChainId.HARMONY_TESTNET]: new Token({
  //   chainId: EvmChainId.HARMONY_TESTNET,
  //   address: WNATIVE_ADDRESS[EvmChainId.HARMONY_TESTNET],
  //   decimals: 18,
  //   symbol: 'WONE',
  //   name: 'Wrapped ONE',
  // }),
  // [EvmChainId.OKEX]: new Token({
  //   chainId: EvmChainId.OKEX,
  //   address: WNATIVE_ADDRESS[EvmChainId.OKEX],
  //   decimals: 18,
  //   symbol: 'WOKT',
  //   name: 'Wrapped OKExChain',
  // }),
  // [EvmChainId.OKEX_TESTNET]: new Token({
  //   chainId: EvmChainId.OKEX_TESTNET,
  //   address: WNATIVE_ADDRESS[EvmChainId.OKEX_TESTNET],
  //   decimals: 18,
  //   symbol: 'WOKT',
  //   name: 'Wrapped OKExChain',
  // }),
  [EvmChainId.CELO]: new Token({
    chainId: EvmChainId.CELO,
    address: WNATIVE_ADDRESS[EvmChainId.CELO],
    decimals: 18,
    symbol: 'CELO',
    name: 'Celo',
  }),
  // [EvmChainId.PALM]: new Token({
  //   chainId: EvmChainId.PALM,
  //   address: WNATIVE_ADDRESS[EvmChainId.PALM],
  //   decimals: 18,
  //   symbol: 'WPALM',
  //   name: 'Wrapped Palm',
  // }),
  [EvmChainId.MOONRIVER]: new Token({
    chainId: EvmChainId.MOONRIVER,
    address: WNATIVE_ADDRESS[EvmChainId.MOONRIVER],
    decimals: 18,
    symbol: 'WMOVR',
    name: 'Wrapped Moonriver',
  }),
  [EvmChainId.FUSE]: new Token({
    chainId: EvmChainId.FUSE,
    address: WNATIVE_ADDRESS[EvmChainId.FUSE],
    decimals: 18,
    symbol: 'WFUSE',
    name: 'Wrapped Fuse',
  }),
  [EvmChainId.TELOS]: new Token({
    chainId: EvmChainId.TELOS,
    address: WNATIVE_ADDRESS[EvmChainId.TELOS],
    decimals: 18,
    symbol: 'WTLOS',
    name: 'Wrapped Telos',
  }),
  [EvmChainId.MOONBEAM]: new Token({
    chainId: EvmChainId.MOONBEAM,
    address: WNATIVE_ADDRESS[EvmChainId.MOONBEAM],
    decimals: 18,
    symbol: 'WGLMR',
    name: 'Wrapped Glimmer',
  }),
  [EvmChainId.KAVA]: new Token({
    chainId: EvmChainId.KAVA,
    address: WNATIVE_ADDRESS[EvmChainId.KAVA],
    decimals: 18,
    symbol: 'WKAVA',
    name: 'Wrapped Kava',
  }),
  [EvmChainId.METIS]: new Token({
    chainId: EvmChainId.METIS,
    address: WNATIVE_ADDRESS[EvmChainId.METIS],
    decimals: 18,
    symbol: 'WMETIS',
    name: 'Wrapped Metis',
  }),
  [EvmChainId.BOBA]: WETH9[EvmChainId.BOBA],
  // [EvmChainId.BOBA_AVAX]: new Token({
  //   chainId: EvmChainId.BOBA_AVAX,
  //   address: WNATIVE_ADDRESS[EvmChainId.BOBA_AVAX],
  //   decimals: 18,
  //   symbol: 'WBOBA',
  //   name: 'Wrapped Boba',
  // }),
  [EvmChainId.BOBA_BNB]: new Token({
    chainId: EvmChainId.BOBA_BNB,
    address: WNATIVE_ADDRESS[EvmChainId.BOBA_BNB],
    decimals: 18,
    symbol: 'WBOBA',
    name: 'Wrapped Boba',
  }),
  [EvmChainId.BTTC]: new Token({
    chainId: EvmChainId.BTTC,
    address: WNATIVE_ADDRESS[EvmChainId.BTTC],
    decimals: 18,
    symbol: 'WBTT',
    name: 'Wrapped BitTorrent Token',
  }),
  // [EvmChainId.SEPOLIA]: WETH9[EvmChainId.SEPOLIA],
  // [EvmChainId.CONSENSUS_ZKEVM_TESTNET]: WETH9[EvmChainId.CONSENSUS_ZKEVM_TESTNET],
  // [EvmChainId.SCROLL_ALPHA_TESTNET]: WETH9[EvmChainId.SCROLL_ALPHA_TESTNET],
  // [EvmChainId.BASE_TESTNET]: WETH9[EvmChainId.BASE_TESTNET],
  [EvmChainId.THUNDERCORE]: new Token({
    chainId: EvmChainId.THUNDERCORE,
    address: WNATIVE_ADDRESS[EvmChainId.THUNDERCORE],
    decimals: 18,
    symbol: 'WTT',
    name: 'Wrapped Thunder Token',
  }),
  [EvmChainId.POLYGON_ZKEVM]: WETH9[EvmChainId.POLYGON_ZKEVM],
  [EvmChainId.HAQQ]: new Token({
    chainId: EvmChainId.HAQQ,
    address: WNATIVE_ADDRESS[EvmChainId.HAQQ],
    decimals: 18,
    symbol: 'WISLM',
    name: 'Wrapped Islamic Coin',
  }),
  [EvmChainId.CORE]: new Token({
    chainId: EvmChainId.CORE,
    address: WNATIVE_ADDRESS[EvmChainId.CORE],
    decimals: 18,
    symbol: 'WCORE',
    name: 'Wrapped Core',
  }),
  [EvmChainId.ZKSYNC_ERA]: WETH9[EvmChainId.ZKSYNC_ERA],
  [EvmChainId.LINEA]: WETH9[EvmChainId.LINEA],
  [EvmChainId.BASE]: WETH9[EvmChainId.BASE],
  [EvmChainId.SCROLL]: WETH9[EvmChainId.SCROLL],
  [EvmChainId.FILECOIN]: new Token({
    chainId: EvmChainId.FILECOIN,
    address: WNATIVE_ADDRESS[EvmChainId.FILECOIN],
    decimals: 18,
    symbol: 'WFIL',
    name: 'Wrapped FIL',
  }),
  [EvmChainId.ZETACHAIN]: new Token({
    chainId: EvmChainId.ZETACHAIN,
    address: WNATIVE_ADDRESS[EvmChainId.ZETACHAIN],
    decimals: 18,
    symbol: 'WZETA',
    name: 'Wrapped ZETA',
  }),
  [EvmChainId.CRONOS]: new Token({
    chainId: EvmChainId.CRONOS,
    address: WNATIVE_ADDRESS[EvmChainId.CRONOS],
    decimals: 18,
    symbol: 'WCRO',
    name: 'Wrapped CRO',
  }),
  [EvmChainId.BLAST]: WETH9[EvmChainId.BLAST],
  [EvmChainId.SKALE_EUROPA]: new Token({
    chainId: EvmChainId.SKALE_EUROPA,
    address: WNATIVE_ADDRESS[EvmChainId.SKALE_EUROPA],
    decimals: 0,
  }),
  [EvmChainId.ROOTSTOCK]: WBTC[EvmChainId.ROOTSTOCK],
  [EvmChainId.MANTLE]: new Token({
    chainId: EvmChainId.MANTLE,
    address: WNATIVE_ADDRESS[EvmChainId.MANTLE],
    decimals: 18,
    symbol: 'WMNT',
    name: 'Wrapped MNT',
  }),
  // [EvmChainId.CURTIS]: new Token({
  //   chainId: EvmChainId.CURTIS,
  //   address: WNATIVE_ADDRESS[EvmChainId.CURTIS],
  //   decimals: 18,
  //   symbol: 'WAPE',
  //   name: 'Wrapped APE',
  // }),
  [EvmChainId.MANTA]: WETH9[EvmChainId.MANTA],
  [EvmChainId.MODE]: WETH9[EvmChainId.MODE],
  [EvmChainId.TAIKO]: WETH9[EvmChainId.TAIKO],
  [EvmChainId.ZKLINK]: WETH9[EvmChainId.ZKLINK],
  [EvmChainId.APE]: new Token({
    chainId: EvmChainId.APE,
    address: WNATIVE_ADDRESS[EvmChainId.APE],
    decimals: 18,
    symbol: 'WAPE',
    name: 'Wrapped Ape',
  }),
  [EvmChainId.SONIC]: new Token({
    chainId: EvmChainId.SONIC,
    address: WNATIVE_ADDRESS[EvmChainId.SONIC],
    decimals: 18,
    symbol: 'wS',
    name: 'Wrapped Sonic',
  }),
  [EvmChainId.HEMI]: WETH9[EvmChainId.HEMI],
  [EvmChainId.TATARA]: WETH9[EvmChainId.TATARA],
  [EvmChainId.KATANA]: WETH9[EvmChainId.KATANA],
  [EvmChainId.HYPEREVM]: new Token({
    chainId: EvmChainId.HYPEREVM,
    address: WNATIVE_ADDRESS[EvmChainId.HYPEREVM],
    decimals: 18,
    symbol: 'WHYPE',
    name: 'Wrapped HYPE',
  }),
} as const

export const SUSHI = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'SUSHI',
    name: 'SushiToken',
  },
  SUSHI_ADDRESS,
) as Record<keyof typeof SUSHI_ADDRESS, Token>

export const XSUSHI = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'XSUSHI',
    name: 'SushiBar',
  },
  XSUSHI_ADDRESS,
) as Record<keyof typeof XSUSHI_ADDRESS, Token>

export const axlUSDC: Record<keyof typeof axlUSDC_ADDRESS, Token> =
  addressMapToTokenMap(
    {
      decimals: 6,
      symbol: 'axlUSDC',
      name: 'Axelar Wrapped USDC',
    },
    axlUSDC_ADDRESS,
  ) as Record<keyof typeof axlUSDC_ADDRESS, Token>

export const axlUSDT: Record<keyof typeof axlUSDT_ADDRESS, Token> =
  addressMapToTokenMap(
    {
      decimals: 6,
      symbol: 'axlUSDT',
      name: 'Axelar Wrapped USDT',
    },
    axlUSDT_ADDRESS,
  ) as Record<keyof typeof axlUSDT_ADDRESS, Token>

export const axlDAI: Record<keyof typeof axlDAI_ADDRESS, Token> =
  addressMapToTokenMap(
    {
      decimals: 18,
      symbol: 'axlDAI',
      name: 'Axelar Wrapped DAI',
    },
    axlDAI_ADDRESS,
  ) as Record<keyof typeof axlDAI_ADDRESS, Token>

export const axlETH: Record<keyof typeof axlETH_ADDRESS, Token> =
  addressMapToTokenMap(
    {
      decimals: 18,
      symbol: 'axlETH',
      name: 'Axelar Wrapped ETH',
    },
    axlETH_ADDRESS,
  ) as Record<keyof typeof axlETH_ADDRESS, Token>

export const axlWBTC: Record<keyof typeof axlWBTC_ADDRESS, Token> =
  addressMapToTokenMap(
    {
      decimals: 8,
      symbol: 'axlWBTC',
      name: 'Axelar Wrapped BTC',
    },
    axlWBTC_ADDRESS,
  ) as Record<keyof typeof axlWBTC_ADDRESS, Token>

export const USD_PLUS: Record<keyof typeof USD_PLUS_ADDRESS, Token> =
  addressMapToTokenMap(
    {
      decimals: 6,
      symbol: 'USD+',
      name: 'USD+',
    },
    USD_PLUS_ADDRESS,
  ) as Record<keyof typeof USD_PLUS_ADDRESS, Token>

export const USDC: Record<keyof typeof USDC_ADDRESS, Token> = {
  ...(addressMapToTokenMap(
    {
      decimals: 6,
      symbol: 'USDC',
      name: 'USD Coin',
    },
    USDC_ADDRESS,
  ) as Omit<
    Record<keyof typeof USDC_ADDRESS, Token>,
    typeof EvmChainId.BSC & typeof EvmChainId.ROOTSTOCK
  >),
  [EvmChainId.BSC]: new Token({
    chainId: EvmChainId.BSC,
    address: USDC_ADDRESS[EvmChainId.BSC],
    decimals: 18,
    symbol: 'USDC',
    name: 'USD Coin',
  }),
  [EvmChainId.BOBA_BNB]: new Token({
    chainId: EvmChainId.BOBA_BNB,
    address: USDC_ADDRESS[EvmChainId.BOBA_BNB],
    decimals: 18,
    symbol: 'USDC',
    name: 'USD Coin',
  }),
  [EvmChainId.ROOTSTOCK]: new Token({
    chainId: EvmChainId.ROOTSTOCK,
    address: USDC_ADDRESS[EvmChainId.ROOTSTOCK],
    decimals: 18,
    symbol: 'rUSDC',
    name: 'rUSDC',
  }),
} as const

export const USDT: Record<keyof typeof USDT_ADDRESS, Token> = {
  ...(addressMapToTokenMap(
    {
      decimals: 6,
      symbol: 'USDT',
      name: 'Tether USD',
    },
    USDT_ADDRESS,
  ) as Omit<
    Record<keyof typeof USDT_ADDRESS, Token>,
    typeof EvmChainId.BSC & typeof EvmChainId.ROOTSTOCK
  >),
  [EvmChainId.BSC]: new Token({
    chainId: EvmChainId.BSC,
    address: USDT_ADDRESS[EvmChainId.BSC],
    decimals: 18,
    symbol: 'USDT',
    name: 'Tether USD',
  }),
  // [EvmChainId.BSC_TESTNET]: new Token({
  //   chainId: EvmChainId.BSC_TESTNET,
  //   address: USDT_ADDRESS[EvmChainId.BSC_TESTNET],
  //   decimals: 18,
  //   symbol: 'USDT',
  //   name: 'Tether USD',
  // }),
  [EvmChainId.BOBA_BNB]: new Token({
    chainId: EvmChainId.BOBA_BNB,
    address: USDT_ADDRESS[EvmChainId.BOBA_BNB],
    decimals: 18,
    symbol: 'USDT',
    name: 'Tether USD',
  }),
  [EvmChainId.ROOTSTOCK]: new Token({
    chainId: EvmChainId.ROOTSTOCK,
    address: USDT_ADDRESS[EvmChainId.ROOTSTOCK],
    decimals: 18,
    symbol: 'rUSDT',
    name: 'rUSDT',
  }),
}

export const DAI = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'DAI',
    name: 'Dai Stablecoin',
  },
  DAI_ADDRESS,
) as Record<keyof typeof DAI_ADDRESS, Token>

export const MIM = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'MIM',
    name: 'Magic Internet Money',
  },
  MIM_ADDRESS,
) as Record<keyof typeof MIM_ADDRESS, Token>

export const FRAX = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'FRAX',
    name: 'Frax',
  },
  FRAX_ADDRESS,
) as Record<keyof typeof FRAX_ADDRESS, Token>

export const FXS = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'FXS',
    name: 'Frax Share',
  },
  FXS_ADDRESS,
) as Record<keyof typeof FXS_ADDRESS, Token>

export const BCT = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'BCT',
    name: 'Toucan Protocol: Base Carbon Tonne',
  },
  BCT_ADDRESS,
) as Record<keyof typeof BCT_ADDRESS, Token>

export const KLIMA = addressMapToTokenMap(
  {
    decimals: 9,
    symbol: 'KLIMA',
    name: 'Klima DAO',
  },
  KLIMA_ADDRESS,
) as Record<keyof typeof KLIMA_ADDRESS, Token>

export const QUICK = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'QUICK',
    name: 'Quickswap',
  },
  QUICK_ADDRESS,
) as Record<keyof typeof QUICK_ADDRESS, Token>

export const OP = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'OP',
    name: 'Optimism',
  },
  OP_ADDRESS,
) as Record<keyof typeof OP_ADDRESS, Token>

export const OCEAN = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'OCEAN',
    name: 'Ocean Token',
  },
  OCEAN_ADDRESS,
) as Record<keyof typeof OCEAN_ADDRESS, Token>

export const BAL = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'BAL',
    name: 'Balancer',
  },
  BAL_ADDRESS,
) as Record<keyof typeof BAL_ADDRESS, Token>

export const WAVAX = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'WAVAX',
    name: 'Wrapped Avalanche Token',
  },
  WAVAX_ADDRESS,
) as Record<keyof typeof WAVAX_ADDRESS, Token>

export const KNCv2 = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'KNCv2',
    name: 'Kyber Network Crystal V2',
  },
  KNCv2_ADDRESS,
) as Record<keyof typeof KNCv2_ADDRESS, Token>

export const GRT = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'GRT',
    name: 'Graph Token',
  },
  GRT_ADDRESS,
) as Record<keyof typeof GRT_ADDRESS, Token>

export const TEL = addressMapToTokenMap(
  {
    decimals: 2,
    symbol: 'TEL',
    name: 'Telcoin',
  },
  TEL_ADDRESS,
) as Record<keyof typeof TEL_ADDRESS, Token>

export const RNDR = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'RNDR',
    name: 'Render Token',
  },
  RNDR_ADDRESS,
) as Record<keyof typeof RNDR_ADDRESS, Token>

export const LINK = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'LINK',
    name: 'ChainLink Token',
  },
  LINK_ADDRESS,
) as Record<keyof typeof LINK_ADDRESS, Token>

export const USDB = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'USDB',
    name: 'USD Blast',
  },
  USDB_ADDRESS,
) as Record<keyof typeof USDB_ADDRESS, Token>

export const WORMHOLE_USDC = addressMapToTokenMap(
  {
    decimals: 6,
    symbol: 'USDC',
    name: 'USD Coin (Wormhole)',
  },
  WORMHOLE_USDC_ADDRESS,
) as Record<keyof typeof WORMHOLE_USDC_ADDRESS, Token>

export const WORMHOLE_WBTC = addressMapToTokenMap(
  {
    decimals: 8,
    symbol: 'WBTC',
    name: 'Wrapped BTC (Wormhole)',
  },
  WORMHOLE_WBTC_ADDRESS,
) as Record<keyof typeof WORMHOLE_WBTC_ADDRESS, Token>

export const WORMHOLE_WETH = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'WETH',
    name: 'Wrapped Ether (Wormhole)',
  },
  WORMHOLE_WETH_ADDRESS,
) as Record<keyof typeof WORMHOLE_WETH_ADDRESS, Token>

export const JUGNI = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'JUGNI',
    name: 'Jugni',
  },
  JUGNI_ADDRESS,
) as Record<keyof typeof JUGNI_ADDRESS, Token>

export const OPTICS_USDC = addressMapToTokenMap(
  {
    decimals: 6,
    symbol: 'USDC',
    name: 'USD Coin (Optics)',
  },
  OPTICS_USDC_ADDRESS,
) as Record<keyof typeof OPTICS_USDC_ADDRESS, Token>

export const USDP = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'USDP',
    name: 'Pax Dollar',
  },
  UDSP_ADDRESS,
) as Record<keyof typeof UDSP_ADDRESS, Token>

export const THUNDERCORE_ANY_USDT = new Token({
  chainId: EvmChainId.THUNDERCORE,
  address: '0x0dcb0cb0120d355cde1ce56040be57add0185baa',
  decimals: 6,
  symbol: 'anyUSDT',
  name: 'Any Tether USD',
})

export const THUNDERCORE_ANY_USDC = new Token({
  chainId: EvmChainId.THUNDERCORE,
  address: '0xdc42728b0ea910349ed3c6e1c9dc06b5fb591f98',
  decimals: 18,
  symbol: 'anyUSDC',
  name: 'Any USD Coin',
})

export const THUNDERCORE_ANY_BUSD = new Token({
  chainId: EvmChainId.THUNDERCORE,
  address: '0xb12c13e66ade1f72f71834f2fc5082db8c091358',
  decimals: 18,
  symbol: 'anyBUSD',
  name: 'Any BUSD Token',
})

export const BTTC_BSC_BRIDGE_USDC = new Token({
  chainId: EvmChainId.BTTC,
  address: '0xca424b845497f7204d9301bd13ff87c0e2e86fcf',
  decimals: 18,
  symbol: 'USDC (BSC)',
  name: 'USD Coin (BSC)',
})
export const BTTC_ETHEREUM_BRIDGE_USDC = new Token({
  chainId: EvmChainId.BTTC,
  address: '0xae17940943ba9440540940db0f1877f101d39e8b',
  decimals: 6,
  symbol: 'USDC (Ethereum)',
  name: 'USD Coin (Ethereum)',
})
export const BTTC_TRON_BRIDGE_USDC = new Token({
  chainId: EvmChainId.BTTC,
  address: '0x935faa2fcec6ab81265b301a30467bbc804b43d3',
  decimals: 6,
  symbol: 'USDC (Tron)',
  name: 'USD Coin (Tron)',
})
export const BTTC_BSC_BRIDGE_USDT = new Token({
  chainId: EvmChainId.BTTC,
  address: '0x9b5f27f6ea9bbd753ce3793a07cba3c74644330d',
  decimals: 18,
  symbol: 'USDT (BSC)',
  name: 'Tether USD (BSC)',
})
export const BTTC_ETHEREUM_BRIDGE_USDT = new Token({
  chainId: EvmChainId.BTTC,
  address: '0xe887512ab8bc60bcc9224e1c3b5be68e26048b8b',
  decimals: 6,
  symbol: 'USDT (Ethereum)',
  name: 'Tether USD (Ethereum)',
})
export const BTTC_TRON_BRIDGE_USDT = new Token({
  chainId: EvmChainId.BTTC,
  address: '0xdb28719f7f938507dbfe4f0eae55668903d34a15',
  decimals: 6,
  symbol: 'USDT (Tron)',
  name: 'Tether USD (Tron)',
})

export const BASE_BRIDGE_USDC = new Token({
  chainId: EvmChainId.BASE,
  address: '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA',
  decimals: 6,
  symbol: 'USDbC',
  name: 'USD Base Coin',
})

export const ZETA_ETH_BRIDGE_USDC = new Token({
  chainId: EvmChainId.ZETACHAIN,
  address: '0x0cbe0dF132a6c6B4a2974Fa1b7Fb953CF0Cc798a',
  decimals: 6,
  symbol: 'USDC.ETH',
  name: 'ZetaChain ZRC20 USDC on ETH',
})
export const ZETA_BSC_BRIDGE_USDC = new Token({
  chainId: EvmChainId.ZETACHAIN,
  address: '0x05BA149A7bd6dC1F937fA9046A9e05C05f3b18b0',
  decimals: 18,
  symbol: 'USDC.BSC',
  name: 'ZetaChain ZRC20 USDC on BSC',
})
export const ZETA_ETH_BRIDGE_USDT = new Token({
  chainId: EvmChainId.ZETACHAIN,
  address: '0x7c8dDa80bbBE1254a7aACf3219EBe1481c6E01d7',
  decimals: 6,
  symbol: 'USDT.ETH',
  name: 'ZetaChain ZRC20 USDT on ETH',
})
export const ZETA_BSC_BRIDGE_USDT = new Token({
  chainId: EvmChainId.ZETACHAIN,
  address: '0x91d4F0D54090Df2D81e834c3c8CE71C6c865e79F',
  decimals: 18,
  symbol: 'USDT.BSC',
  name: 'ZetaChain ZRC20 USDT on BSC',
})

export const FILECOIN_CELER_BRIDGE_USDC = new Token({
  chainId: EvmChainId.FILECOIN,
  address: '0x2421db204968A367CC2C866CD057fA754Cb84EdF',
  decimals: 6,
  symbol: 'ceUSDC',
  name: 'USD Coin (Celer)',
})

export const FILECOIN_CELER_BRIDGE_USDT = new Token({
  chainId: EvmChainId.FILECOIN,
  address: '0x422849b355039bc58f2780cc4854919fc9cfaf94',
  decimals: 6,
  symbol: 'ceUSDT',
  name: 'Tether USD (Celer)',
})

export const SKL = new Token({
  chainId: EvmChainId.SKALE_EUROPA,
  address: '0xE0595a049d02b7674572b0d59cd4880Db60EDC50',
  name: 'SKALE',
  symbol: 'SKL',
  decimals: 18,
})

export const SolvBTC = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'Solv BTC',
    name: 'SolvBTC',
  },
  SolvBTC_ADDRESS,
) as Record<keyof typeof SolvBTC_ADDRESS, Token>

export const xSolvBTC = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'xSolvBTC',
    name: 'xSolvBTC',
  },
  xSolvBTC_ADDRESS,
) as Record<keyof typeof xSolvBTC_ADDRESS, Token>

export const METH = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'mETH',
    name: 'Mantle Staked Ether',
  },
  METH_ADDRESS,
) as Record<keyof typeof METH_ADDRESS, Token>

export const STONE = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'STONE',
    name: 'StakeStone Ether',
  },
  STONE_ADDRESS,
) as Record<keyof typeof STONE_ADDRESS, Token>

export const APE_USD = new Token({
  chainId: EvmChainId.APE,
  address: APE_USD_ADDRESS,
  symbol: 'ApeUSD',
  name: 'Ape USD',
  decimals: 18,
})

export const APE_ETH = new Token({
  chainId: EvmChainId.APE,
  address: APE_ETH_ADDRESS,
  symbol: 'ApeETH',
  name: 'Ape ETH',
  decimals: 18,
})

// Curve tokens for metapools
export const THREE_CRV = new Token({
  chainId: EvmChainId.ETHEREUM,
  address: '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
  symbol: '3Crv',
  name: 'Curve.fi DAI/USDC/USDT',
  decimals: 18,
})
export const CRV_FRAX = new Token({
  chainId: EvmChainId.ETHEREUM,
  address: '0x3175Df0976dFA876431C2E9eE6Bc45b65d3473CC',
  symbol: 'crvFRAX',
  name: 'Curve.fi FRAX/USDC',
  decimals: 18,
})
export const CRV_REN_WSBTC = new Token({
  chainId: EvmChainId.ETHEREUM,
  address: '0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3',
  symbol: 'crvRenWSBTC',
  name: 'Curve.fi renBTC/wBTC/sBTC',
  decimals: 18,
})

export const GUSD = new Token({
  chainId: EvmChainId.ETHEREUM,
  address: '0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd',
  symbol: 'GUSD',
  name: 'Gemini dollar',
  decimals: 2,
})
export const CRV_USD = new Token({
  chainId: EvmChainId.ETHEREUM,
  address: '0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E',
  symbol: 'crvUSD',
  name: 'Curve.Fi USD Stablecoin',
  decimals: 18,
})

export const DOC = new Token({
  chainId: EvmChainId.ROOTSTOCK,
  address: '0xE700691Da7B9851F2F35f8b8182C69C53ccad9DB',
  decimals: 18,
  symbol: 'DOC',
  name: 'Dollar on Chain',
})

export const STETH = new Token({
  chainId: EvmChainId.ETHEREUM,
  address: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
  name: 'Liquid staked Ether 2.0',
  symbol: 'stETH',
  decimals: 18,
})

export const WstETH = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'wstETH',
    name: 'Wrapped liquid staked Ether 2.0',
  },
  WstETH_ADDRESS,
) as Record<keyof typeof WstETH_ADDRESS, Token>

export const AERO = new Token({
  chainId: EvmChainId.BASE,
  address: '0x940181a94A35A4569E4529A3CDfB74e38FD98631',
  name: 'Aerodrome',
  symbol: 'stETH',
  decimals: 18,
})

export const USDe = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'USDe',
    name: 'USDe',
  },
  USDe_ADDRESS,
) as Record<keyof typeof USDe_ADDRESS, Token>

export const USDPLUS = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'USD+',
    name: 'USD+',
  },
  USDPLUS_ADDRESS,
) as Record<keyof typeof USDPLUS_ADDRESS, Token>

export const RBTC = new Token({
  chainId: EvmChainId.ROOTSTOCK,
  address: '0x542fDA317318eBF1d3DEAf76E0b632741A7e677d',
  symbol: 'RBTC',
  name: 'Rootstock Smart Bitcoin',
  decimals: 18,
})

export const AUSD = addressMapToTokenMap(
  {
    decimals: 6,
    symbol: 'AUSD',
    name: 'AgoraDollar',
  },
  AUSD_ADDRESS,
) as Record<keyof typeof AUSD_ADDRESS, Token>

export const USDT0 = addressMapToTokenMap(
  {
    decimals: 6,
    symbol: 'USD₮0',
    name: 'USD₮0',
  },
  USDT0_ADDRESS,
) as Record<keyof typeof USDT0_ADDRESS, Token>
