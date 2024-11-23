import { ChainId } from '../../chain/index.js'
import type { Token } from '../../currency/index.js'
import {
  APE_ADDRESS,
  BCT_ADDRESS,
  FEI_ADDRESS,
  FRAX_ADDRESS,
  FXS_ADDRESS,
  KLIMA_ADDRESS,
  KP3R_ADDRESS,
  LDO_ADDRESS,
  LUSD_ADDRESS,
  PRIMATE_ADDRESS,
  SUSHI_ADDRESS,
  SWISE_ADDRESS,
  TRIBE_ADDRESS,
  WBTC_ADDRESS,
  XSUSHI_ADDRESS,
  rETH2_ADDRESS,
  renBTC_ADDRESS,
} from '../../currency/token-addresses.js'
import {
  AAVE,
  APE,
  BAL,
  BCT,
  COMP,
  CRV,
  CRV_FRAX,
  CRV_REN_WSBTC,
  ENJ,
  FEI,
  FRAX,
  FXS,
  GALA,
  GNS,
  GRT,
  JUGNI,
  KLIMA,
  KNCv2,
  KP3R,
  LDO,
  LINK,
  MANA,
  MKR,
  OCEAN,
  PRIMATE,
  QUICK,
  RNDR,
  SAND,
  SNX,
  STG,
  SUSHI,
  SolvBTC,
  TEL,
  TRIBE,
  UNI,
  WAVAX,
  WBTC,
  XSUSHI,
  YFI,
  renBTC,
  sETH2,
} from '../../currency/tokens.js'

export const ADDITIONAL_BASES: {
  [chainId: number]: { [tokenAddress: string]: Token[] }
} = {
  [ChainId.ETHEREUM]: {
    [rETH2_ADDRESS[ChainId.ETHEREUM]]: [sETH2[ChainId.ETHEREUM]],
    [SWISE_ADDRESS[ChainId.ETHEREUM]]: [sETH2[ChainId.ETHEREUM]],
    [FEI_ADDRESS[ChainId.ETHEREUM]]: [TRIBE[ChainId.ETHEREUM]],
    [TRIBE_ADDRESS[ChainId.ETHEREUM]]: [FEI[ChainId.ETHEREUM]],
    [FRAX_ADDRESS[ChainId.ETHEREUM]]: [FXS[ChainId.ETHEREUM]],
    [FXS_ADDRESS[ChainId.ETHEREUM]]: [FRAX[ChainId.ETHEREUM]],
    [WBTC_ADDRESS[ChainId.ETHEREUM]]: [renBTC[ChainId.ETHEREUM]],
    [renBTC_ADDRESS[ChainId.ETHEREUM]]: [WBTC[ChainId.ETHEREUM]],
    [APE_ADDRESS[ChainId.ETHEREUM]]: [PRIMATE[ChainId.ETHEREUM]],
    [PRIMATE_ADDRESS[ChainId.ETHEREUM]]: [APE[ChainId.ETHEREUM]],
    [SUSHI_ADDRESS[ChainId.ETHEREUM]]: [XSUSHI[ChainId.ETHEREUM]],
    [XSUSHI_ADDRESS[ChainId.ETHEREUM]]: [SUSHI[ChainId.ETHEREUM]],
    [KP3R_ADDRESS[ChainId.ETHEREUM]]: [LDO[ChainId.ETHEREUM]],
    [LDO_ADDRESS[ChainId.ETHEREUM]]: [KP3R[ChainId.ETHEREUM]],
    ['0x1e0275806C3CD0bDb5C99916A064d36b5e8eAE8d']: [
      // TWO
      AAVE[ChainId.ETHEREUM],
      MKR[ChainId.ETHEREUM],
      SNX[ChainId.ETHEREUM],
      CRV[ChainId.ETHEREUM],
      YFI[ChainId.ETHEREUM],
      ENJ[ChainId.ETHEREUM],
      COMP[ChainId.ETHEREUM],
      GALA[ChainId.ETHEREUM],
      XSUSHI[ChainId.ETHEREUM],
    ],
    // tokens for metapools begin
    ['0xBC6DA0FE9aD5f3b0d58160288917AA56653660E9']: [CRV_FRAX], // alUSD
    ['0x865377367054516e17014CcdED1e7d814EDC9ce4']: [CRV_FRAX], // Dola
    ['0xab5eB14c09D416F0aC63661E57EDB7AEcDb9BEfA']: [CRV_FRAX], // msUSD
    ['0x4591DBfF62656E7859Afe5e45f6f47D3669fBB28']: [CRV_FRAX], // mkUSD
    ['0xd7C9F0e536dC865Ae858b0C0453Fe76D13c3bEAc']: [CRV_FRAX], // XAI
    ['0x15f74458aE0bFdAA1a96CA1aa779D715Cc1Eefe4']: [CRV_FRAX], // GRAI
    ['0x3C20Ac688410bE8F391bE1fb00AFc5C212972F86']: [CRV_FRAX], // clevUSD
    ['0xfF709449528B6fB6b88f557F7d93dEce33bca78D']: [CRV_FRAX], // ApeUSD
    [LUSD_ADDRESS[ChainId.ETHEREUM]]: [CRV_FRAX],
    ['0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa']: [CRV_REN_WSBTC], // TBTC
    ['0x8751D4196027d4e6DA63716fA7786B5174F04C15']: [CRV_REN_WSBTC], // wibBTC
    ['0x9BE89D2a4cd102D8Fecc6BF9dA793be995C22541']: [CRV_REN_WSBTC], // BBTC
    // tokens for metapools end
  },
  [ChainId.POLYGON]: {
    [FRAX_ADDRESS[ChainId.POLYGON]]: [FXS[ChainId.POLYGON]],
    [FXS_ADDRESS[ChainId.POLYGON]]: [FRAX[ChainId.POLYGON]],
    [BCT_ADDRESS[ChainId.POLYGON]]: [KLIMA[ChainId.POLYGON]],
    [KLIMA_ADDRESS[ChainId.POLYGON]]: [BCT[ChainId.POLYGON]],
    // THREE
    ['0x9B034262e0095210ab9ddec60199741a8a1FbFe7']: [
      AAVE[ChainId.POLYGON],
      LINK[ChainId.POLYGON],
      MANA[ChainId.POLYGON],
      SNX[ChainId.POLYGON],
      CRV[ChainId.POLYGON],
      YFI[ChainId.POLYGON],
      GNS[ChainId.POLYGON],
      SAND[ChainId.POLYGON],
      STG[ChainId.POLYGON],
      UNI[ChainId.POLYGON],
      SUSHI[ChainId.POLYGON],
      RNDR[ChainId.POLYGON],
      TEL[ChainId.POLYGON],
      GRT[ChainId.POLYGON],
      BAL[ChainId.POLYGON],
      QUICK[ChainId.POLYGON],
      OCEAN[ChainId.POLYGON],
      XSUSHI[ChainId.POLYGON],
      KNCv2[ChainId.POLYGON],
      WAVAX[ChainId.POLYGON],
      JUGNI[ChainId.POLYGON],
    ],
  },
  [ChainId.ARBITRUM]: {
    [FRAX_ADDRESS[ChainId.ARBITRUM]]: [FXS[ChainId.ARBITRUM]],
    [FXS_ADDRESS[ChainId.ARBITRUM]]: [FRAX[ChainId.ARBITRUM]],
    ['0xaFAfd68AFe3fe65d376eEC9Eab1802616cFacCb8']: [SolvBTC[ChainId.ARBITRUM]], // SolvBTC.ENA
    ['0x346c574C56e1A4aAa8dc88Cda8F7EB12b39947aB']: [SolvBTC[ChainId.ARBITRUM]], // SolvBTC.BBN
  },
  [ChainId.FANTOM]: {
    [FRAX_ADDRESS[ChainId.FANTOM]]: [FXS[ChainId.FANTOM]],
    [FXS_ADDRESS[ChainId.FANTOM]]: [FRAX[ChainId.FANTOM]],
  },
  [ChainId.BSC]: {
    [FRAX_ADDRESS[ChainId.BSC]]: [FXS[ChainId.BSC]],
    [FXS_ADDRESS[ChainId.BSC]]: [FRAX[ChainId.BSC]],
  },
  [ChainId.AVALANCHE]: {
    [FRAX_ADDRESS[ChainId.AVALANCHE]]: [FXS[ChainId.AVALANCHE]],
    [FXS_ADDRESS[ChainId.AVALANCHE]]: [FRAX[ChainId.AVALANCHE]],
  },
  [ChainId.MOONRIVER]: {
    [FRAX_ADDRESS[ChainId.MOONRIVER]]: [FXS[ChainId.MOONRIVER]],
    [FXS_ADDRESS[ChainId.MOONRIVER]]: [FRAX[ChainId.MOONRIVER]],
  },
  [ChainId.MOONBEAM]: {
    [FRAX_ADDRESS[ChainId.MOONBEAM]]: [FXS[ChainId.MOONBEAM]],
    [FXS_ADDRESS[ChainId.MOONBEAM]]: [FRAX[ChainId.MOONBEAM]],
  },
  [ChainId.HARMONY]: {
    [FRAX_ADDRESS[ChainId.HARMONY]]: [FXS[ChainId.HARMONY]],
    [FXS_ADDRESS[ChainId.HARMONY]]: [FRAX[ChainId.HARMONY]],
  },
  [ChainId.BOBA]: {
    [FRAX_ADDRESS[ChainId.BOBA]]: [FXS[ChainId.BOBA]],
    [FXS_ADDRESS[ChainId.BOBA]]: [FRAX[ChainId.BOBA]],
  },
  [ChainId.OPTIMISM]: {
    [FRAX_ADDRESS[ChainId.OPTIMISM]]: [FXS[ChainId.OPTIMISM]],
    [FXS_ADDRESS[ChainId.OPTIMISM]]: [FRAX[ChainId.OPTIMISM]],
  },
}
