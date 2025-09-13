import { EvmChainId, evmChainIds } from '../../../chain/index.js'
import {
  APE_USD,
  ARB,
  AUSD,
  axlUSDC,
  BUSD,
  GNO,
  OP,
  SUSHI,
  USDB,
  USDC,
  USDT,
  USDT0,
  WETH9,
} from '../../../config/tokens/tokens/index.js'
import type { EvmCurrency } from '../../../currency/currency.js'
import { EvmNative } from '../../../currency/native.js'
import { EvmToken } from '../../../currency/token.js'
import { WNATIVE } from '../wrapped-native.js'

export const defaultCurrency = {
  ...(Object.fromEntries(
    evmChainIds.map((chainId) => [chainId, EvmNative.fromChainId(chainId)]),
  ) as Omit<Record<EvmChainId, EvmNative>, typeof EvmChainId.SKALE_EUROPA>),

  [EvmChainId.SKALE_EUROPA]: WETH9[EvmChainId.SKALE_EUROPA],
} as const satisfies Record<EvmChainId, EvmCurrency>

export const defaultQuoteCurrency = {
  [EvmChainId.ETHEREUM]: SUSHI[EvmChainId.ETHEREUM],
  [EvmChainId.SEPOLIA]: USDC[EvmChainId.SEPOLIA],
  [EvmChainId.POLYGON]: SUSHI[EvmChainId.POLYGON],
  [EvmChainId.FANTOM]: axlUSDC[EvmChainId.FANTOM],
  [EvmChainId.GNOSIS]: GNO[EvmChainId.GNOSIS],
  [EvmChainId.BSC]: BUSD[EvmChainId.BSC],
  [EvmChainId.ARBITRUM]: ARB[EvmChainId.ARBITRUM],
  [EvmChainId.ARBITRUM_NOVA]: ARB[EvmChainId.ARBITRUM_NOVA],
  [EvmChainId.ARBITRUM_SEPOLIA]: WNATIVE[EvmChainId.ARBITRUM_SEPOLIA],
  [EvmChainId.AVALANCHE]: USDC[EvmChainId.AVALANCHE],
  [EvmChainId.HARMONY]: USDC[EvmChainId.HARMONY],
  [EvmChainId.CELO]: USDC[EvmChainId.CELO],
  [EvmChainId.OPTIMISM]: OP[EvmChainId.OPTIMISM],
  [EvmChainId.KAVA]: axlUSDC[EvmChainId.KAVA],
  [EvmChainId.METIS]: USDC[EvmChainId.METIS],
  [EvmChainId.BOBA]: USDC[EvmChainId.BOBA],
  [EvmChainId.BOBA_BNB]: new EvmToken({
    chainId: EvmChainId.BOBA_BNB,
    address: '0x4200000000000000000000000000000000000023',
    decimals: 18,
    symbol: 'BNB',
    name: 'Binance Coin',
  }),
  [EvmChainId.BTTC]: USDC[EvmChainId.BTTC],
  [EvmChainId.THUNDERCORE]: USDC[EvmChainId.THUNDERCORE],
  [EvmChainId.POLYGON_ZKEVM]: USDC[EvmChainId.POLYGON_ZKEVM],
  [EvmChainId.HAQQ]: USDC[EvmChainId.HAQQ],
  [EvmChainId.CORE]: USDC[EvmChainId.CORE],
  [EvmChainId.ZKSYNC_ERA]: USDC[EvmChainId.ZKSYNC_ERA],
  [EvmChainId.LINEA]: axlUSDC[EvmChainId.LINEA],
  [EvmChainId.BASE]: USDC[EvmChainId.BASE],
  [EvmChainId.SCROLL]: USDC[EvmChainId.SCROLL],
  [EvmChainId.FILECOIN]: axlUSDC[EvmChainId.FILECOIN],
  [EvmChainId.ZETACHAIN]: WETH9[EvmChainId.ZETACHAIN],
  [EvmChainId.CRONOS]: WETH9[EvmChainId.CRONOS],
  [EvmChainId.BLAST]: USDB[EvmChainId.BLAST],
  [EvmChainId.SKALE_EUROPA]: USDC[EvmChainId.SKALE_EUROPA],
  [EvmChainId.ROOTSTOCK]: USDT0[EvmChainId.ROOTSTOCK],
  [EvmChainId.MANTLE]: WETH9[EvmChainId.MANTLE],
  [EvmChainId.MANTA]: USDC[EvmChainId.MANTA],
  [EvmChainId.MODE]: USDC[EvmChainId.MODE],
  [EvmChainId.TAIKO]: USDC[EvmChainId.TAIKO],
  [EvmChainId.ZKLINK]: USDC[EvmChainId.ZKLINK],
  [EvmChainId.APE]: APE_USD[EvmChainId.APE],
  [EvmChainId.SONIC]: WETH9[EvmChainId.SONIC],
  [EvmChainId.HEMI]: USDC[EvmChainId.HEMI],
  [EvmChainId.TATARA]: AUSD[EvmChainId.TATARA],
  [EvmChainId.KATANA]: USDC[EvmChainId.KATANA],
  [EvmChainId.HYPEREVM]: USDT[EvmChainId.HYPEREVM],
  [EvmChainId.BERACHAIN]: USDT[EvmChainId.BERACHAIN],
} as const satisfies Record<EvmChainId, EvmCurrency>
