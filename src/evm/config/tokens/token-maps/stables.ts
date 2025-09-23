import type { EvmCurrency } from '../../../../evm/currency/currency.js'
import { EvmChainId } from '../../../chain/chains.js'
import {
  APE_USD,
  axlUSDC,
  BASE_USDbC,
  BTTC_USDC_BSC,
  BTTC_USDC_ETHEREUM,
  BTTC_USDC_TRON,
  BTTC_USDT_BSC,
  BTTC_USDT_ETHEREUM,
  BTTC_USDT_TRON,
  BUSD,
  DAI,
  DOC,
  FILECOIN_USDC_CELER,
  FILECOIN_USDT_CELER,
  FRAX,
  LUSD,
  MIM,
  OPTICS_USDC,
  STARGATE_USDC,
  STARGATE_USDT,
  THUNDERCORE_ANY_BUSD,
  THUNDERCORE_ANY_USDC,
  THUNDERCORE_ANY_USDT,
  USD_PLUS,
  USDB,
  USDC,
  USDe,
  USDP,
  USDPLUS,
  USDT,
  ZETA_USDC_BSC,
  ZETA_USDC_ETH,
  ZETA_USDT_BSC,
  ZETA_USDT_ETH,
} from '../../../config/tokens/tokens/index.js'
import { EvmToken } from '../../../currency/token.js'
import { AUSD } from '../tokens/AUSD.js'
import { HONEY } from '../tokens/berachain/HONEY.js'
import { USDT0 } from '../tokens/USDT0.js'

export const STABLES = {
  [EvmChainId.ARBITRUM]: [
    USDC[EvmChainId.ARBITRUM],
    USDT[EvmChainId.ARBITRUM],
    DAI[EvmChainId.ARBITRUM],
    FRAX[EvmChainId.ARBITRUM],
    axlUSDC[EvmChainId.ARBITRUM],
  ],
  [EvmChainId.ARBITRUM_NOVA]: [
    USDC[EvmChainId.ARBITRUM_NOVA],
    USDT[EvmChainId.ARBITRUM_NOVA],
    DAI[EvmChainId.ARBITRUM_NOVA],
  ],
  [EvmChainId.AVALANCHE]: [
    USDC[EvmChainId.AVALANCHE],
    USDT[EvmChainId.AVALANCHE],
    DAI[EvmChainId.AVALANCHE],
    MIM[EvmChainId.AVALANCHE],
    FRAX[EvmChainId.AVALANCHE],
    axlUSDC[EvmChainId.AVALANCHE],
  ],
  [EvmChainId.BASE]: [
    USDC[EvmChainId.BASE],
    DAI[EvmChainId.BASE],
    axlUSDC[EvmChainId.BASE],
    USD_PLUS[EvmChainId.BASE],
    BASE_USDbC[EvmChainId.BASE],
  ],
  [EvmChainId.BOBA]: [
    USDC[EvmChainId.BOBA],
    USDT[EvmChainId.BOBA],
    DAI[EvmChainId.BOBA],
  ],
  [EvmChainId.BOBA_BNB]: [USDC[EvmChainId.BOBA_BNB], USDT[EvmChainId.BOBA_BNB]],
  [EvmChainId.BSC]: [
    USDC[EvmChainId.BSC],
    USDT[EvmChainId.BSC],
    BUSD[EvmChainId.BSC],
    DAI[EvmChainId.BSC],
    //MIM[EvmChainId.BSC],
    FRAX[EvmChainId.BSC],
    axlUSDC[EvmChainId.BSC],
  ],
  [EvmChainId.BTTC]: [
    USDC[EvmChainId.BTTC],
    USDT[EvmChainId.BTTC],
    BTTC_USDC_BSC[EvmChainId.BTTC],
    BTTC_USDC_ETHEREUM[EvmChainId.BTTC],
    BTTC_USDC_TRON[EvmChainId.BTTC],
    BTTC_USDT_BSC[EvmChainId.BTTC],
    BTTC_USDT_ETHEREUM[EvmChainId.BTTC],
    BTTC_USDT_TRON[EvmChainId.BTTC],
  ],
  [EvmChainId.CELO]: [
    USDC[EvmChainId.CELO],
    USDT[EvmChainId.CELO],
    DAI[EvmChainId.CELO],
    OPTICS_USDC[EvmChainId.CELO],
    axlUSDC[EvmChainId.CELO],
  ],
  [EvmChainId.ETHEREUM]: [
    USDC[EvmChainId.ETHEREUM],
    USDT[EvmChainId.ETHEREUM],
    DAI[EvmChainId.ETHEREUM],
    LUSD[EvmChainId.ETHEREUM],
    MIM[EvmChainId.ETHEREUM],
    FRAX[EvmChainId.ETHEREUM],
  ],
  [EvmChainId.FANTOM]: [
    axlUSDC[EvmChainId.FANTOM],
    STARGATE_USDC[EvmChainId.FANTOM],
    STARGATE_USDT[EvmChainId.FANTOM],
    MIM[EvmChainId.FANTOM],
    FRAX[EvmChainId.FANTOM],
  ],
  [EvmChainId.FILECOIN]: [
    USDC[EvmChainId.FILECOIN],
    DAI[EvmChainId.FILECOIN],
    FILECOIN_USDC_CELER[EvmChainId.FILECOIN],
    FILECOIN_USDT_CELER[EvmChainId.FILECOIN],
  ],
  [EvmChainId.GNOSIS]: [
    USDC[EvmChainId.GNOSIS],
    USDT[EvmChainId.GNOSIS],
    DAI[EvmChainId.GNOSIS],
  ],
  [EvmChainId.HARMONY]: [
    USDC[EvmChainId.HARMONY],
    USDT[EvmChainId.HARMONY],
    DAI[EvmChainId.HARMONY],
    FRAX[EvmChainId.HARMONY],
  ],
  [EvmChainId.HAQQ]: [
    USDC[EvmChainId.HAQQ],
    USDT[EvmChainId.HAQQ],
    DAI[EvmChainId.HAQQ],
  ],
  [EvmChainId.KAVA]: [axlUSDC[EvmChainId.KAVA], USDT[EvmChainId.KAVA]],
  [EvmChainId.LINEA]: [
    USDC[EvmChainId.LINEA],
    axlUSDC[EvmChainId.LINEA],
    DAI[EvmChainId.LINEA],
  ],
  [EvmChainId.METIS]: [
    USDC[EvmChainId.METIS],
    USDT[EvmChainId.METIS],
    DAI[EvmChainId.METIS],
  ],
  [EvmChainId.OPTIMISM]: [
    USDC[EvmChainId.OPTIMISM],
    USDT[EvmChainId.OPTIMISM],
    DAI[EvmChainId.OPTIMISM],
    FRAX[EvmChainId.OPTIMISM],
    axlUSDC[EvmChainId.OPTIMISM],
  ],
  [EvmChainId.POLYGON]: [
    USDC[EvmChainId.POLYGON],
    USDT[EvmChainId.POLYGON],
    DAI[EvmChainId.POLYGON],
    MIM[EvmChainId.POLYGON],
    FRAX[EvmChainId.POLYGON],
    axlUSDC[EvmChainId.POLYGON],
  ],
  [EvmChainId.POLYGON_ZKEVM]: [
    USDC[EvmChainId.POLYGON_ZKEVM],
    USDT[EvmChainId.POLYGON_ZKEVM],
    DAI[EvmChainId.POLYGON_ZKEVM],
  ],
  [EvmChainId.SCROLL]: [
    USDC[EvmChainId.SCROLL],
    USDT[EvmChainId.SCROLL],
    DAI[EvmChainId.SCROLL],
    axlUSDC[EvmChainId.SCROLL],
  ],
  [EvmChainId.THUNDERCORE]: [
    USDC[EvmChainId.THUNDERCORE],
    USDT[EvmChainId.THUNDERCORE],
    BUSD[EvmChainId.THUNDERCORE],
    THUNDERCORE_ANY_BUSD[EvmChainId.THUNDERCORE],
    THUNDERCORE_ANY_USDC[EvmChainId.THUNDERCORE],
    THUNDERCORE_ANY_USDT[EvmChainId.THUNDERCORE],
  ],
  [EvmChainId.CORE]: [USDC[EvmChainId.CORE], USDT[EvmChainId.CORE]],
  [EvmChainId.ZETACHAIN]: [
    ZETA_USDC_BSC[EvmChainId.ZETACHAIN],
    ZETA_USDT_BSC[EvmChainId.ZETACHAIN],
    ZETA_USDC_ETH[EvmChainId.ZETACHAIN],
    ZETA_USDT_ETH[EvmChainId.ZETACHAIN],
  ],
  [EvmChainId.CRONOS]: [USDC[EvmChainId.CRONOS]],
  [EvmChainId.BLAST]: [
    USDB[EvmChainId.BLAST],
    USDe[EvmChainId.BLAST],
    USDPLUS[EvmChainId.BLAST],
  ],
  [EvmChainId.SKALE_EUROPA]: [
    USDC[EvmChainId.SKALE_EUROPA],
    USDT[EvmChainId.SKALE_EUROPA],
    DAI[EvmChainId.SKALE_EUROPA],
    USDP[EvmChainId.SKALE_EUROPA],
  ],
  [EvmChainId.ROOTSTOCK]: [
    USDT[EvmChainId.ROOTSTOCK],
    DAI[EvmChainId.ROOTSTOCK],
    DOC[EvmChainId.ROOTSTOCK],
    USDT0[EvmChainId.ROOTSTOCK],
  ],
  [EvmChainId.MANTLE]: [USDC[EvmChainId.MANTLE], USDT[EvmChainId.MANTLE]],
  [EvmChainId.ZKSYNC_ERA]: [
    USDC[EvmChainId.ZKSYNC_ERA],
    USDT[EvmChainId.ZKSYNC_ERA],
  ],
  [EvmChainId.MANTA]: [USDC[EvmChainId.MANTA], USDT[EvmChainId.MANTA]],
  [EvmChainId.MODE]: [USDC[EvmChainId.MODE], USDT[EvmChainId.MODE]],
  [EvmChainId.TAIKO]: [
    USDC[EvmChainId.TAIKO],
    USDT[EvmChainId.TAIKO],
    DAI[EvmChainId.TAIKO],
  ],
  [EvmChainId.ZKLINK]: [
    USDC[EvmChainId.ZKLINK],
    USDT[EvmChainId.ZKLINK],
    DAI[EvmChainId.ZKLINK],
  ],
  [EvmChainId.APE]: [APE_USD[EvmChainId.APE]],
  [EvmChainId.SONIC]: [USDC[EvmChainId.SONIC]],
  [EvmChainId.HEMI]: [
    USDC[EvmChainId.HEMI],
    USDT[EvmChainId.HEMI],
    new EvmToken({
      chainId: EvmChainId.HEMI,
      address: '0x7a06c4aef988e7925575c50261297a946ad204a8',
      decimals: 18,
      name: 'VUSD',
      symbol: 'VUSD',
    }),
  ],
  [EvmChainId.KATANA]: [
    USDC[EvmChainId.KATANA],
    USDT[EvmChainId.KATANA],
    AUSD[EvmChainId.KATANA],
  ],
  [EvmChainId.HYPEREVM]: [USDT[EvmChainId.HYPEREVM]],
  [EvmChainId.BERACHAIN]: [
    USDT[EvmChainId.BERACHAIN],
    USDC[EvmChainId.BERACHAIN],
    HONEY[EvmChainId.BERACHAIN],
  ],
  // TESTNETS
  [EvmChainId.ARBITRUM_SEPOLIA]: [],
  [EvmChainId.SEPOLIA]: [USDC[EvmChainId.SEPOLIA]],
  [EvmChainId.TATARA]: [AUSD[EvmChainId.TATARA]],
} as const satisfies Record<EvmChainId, EvmToken[]>

export function isStable(currency: EvmCurrency): boolean {
  if (currency.type === 'native') {
    return false
  }

  return STABLES[currency.chainId]?.some(
    (stable) => stable.address.toLowerCase() === currency.address.toLowerCase(),
  )
}
