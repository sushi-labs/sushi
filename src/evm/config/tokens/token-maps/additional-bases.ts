import type { Address } from 'viem'
import { EvmChainId } from '~evm/chain/index.js'
import type { EvmToken } from '~evm/currency/token.js'
import { SUSHI_ADDRESS } from '../tokens/SUSHI.js'
import { SWISE_ADDRESS } from '../tokens/SWISE.js'
import { TRIBE_ADDRESS } from '../tokens/TRIBE.js'
import { WBTC_ADDRESS } from '../tokens/WBTC.js'
import { XSUSHI_ADDRESS } from '../tokens/XSUSHI.js'
import {
  AAVE,
  APE,
  APE_ADDRESS,
  BAL,
  BCT,
  BCT_ADDRESS,
  COMP,
  CRV,
  ENJ,
  ETHEREUM_CRV_FRAX,
  ETHEREUM_CRV_REN_WSBTC,
  FEI,
  FEI_ADDRESS,
  FRAX,
  FRAX_ADDRESS,
  FXS,
  FXS_ADDRESS,
  GALA,
  GNS,
  GRT,
  JUGNI,
  KLIMA,
  KLIMA_ADDRESS,
  KNCv2,
  KP3R,
  KP3R_ADDRESS,
  LDO,
  LDO_ADDRESS,
  LINK,
  LUSD_ADDRESS,
  MANA,
  MKR,
  OCEAN,
  PRIMATE,
  PRIMATE_ADDRESS,
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
  rETH2_ADDRESS,
  renBTC,
  renBTC_ADDRESS,
  sETH2,
  xSolvBTC,
} from '../tokens/index.js'
import { xSolvBTC_ADDRESS } from '../tokens/xSolvBTC.js'
import { SolvBTC_ADDRESS } from '../tokens/SolvBTC.js'

export const ADDITIONAL_BASES = {
  [EvmChainId.ETHEREUM]: {
    [rETH2_ADDRESS[EvmChainId.ETHEREUM]]: [sETH2[EvmChainId.ETHEREUM]],
    [SWISE_ADDRESS[EvmChainId.ETHEREUM]]: [sETH2[EvmChainId.ETHEREUM]],
    [FEI_ADDRESS[EvmChainId.ETHEREUM]]: [TRIBE[EvmChainId.ETHEREUM]],
    [TRIBE_ADDRESS[EvmChainId.ETHEREUM]]: [FEI[EvmChainId.ETHEREUM]],
    [FRAX_ADDRESS[EvmChainId.ETHEREUM]]: [FXS[EvmChainId.ETHEREUM]],
    [FXS_ADDRESS[EvmChainId.ETHEREUM]]: [FRAX[EvmChainId.ETHEREUM]],
    [WBTC_ADDRESS[EvmChainId.ETHEREUM]]: [renBTC[EvmChainId.ETHEREUM]],
    [renBTC_ADDRESS[EvmChainId.ETHEREUM]]: [WBTC[EvmChainId.ETHEREUM]],
    [APE_ADDRESS[EvmChainId.ETHEREUM]]: [PRIMATE[EvmChainId.ETHEREUM]],
    [PRIMATE_ADDRESS[EvmChainId.ETHEREUM]]: [APE[EvmChainId.ETHEREUM]],
    [SUSHI_ADDRESS[EvmChainId.ETHEREUM]]: [XSUSHI[EvmChainId.ETHEREUM]],
    [XSUSHI_ADDRESS[EvmChainId.ETHEREUM]]: [SUSHI[EvmChainId.ETHEREUM]],
    [KP3R_ADDRESS[EvmChainId.ETHEREUM]]: [LDO[EvmChainId.ETHEREUM]],
    [LDO_ADDRESS[EvmChainId.ETHEREUM]]: [KP3R[EvmChainId.ETHEREUM]],
    ['0x1e0275806C3CD0bDb5C99916A064d36b5e8eAE8d']: [
      // TWO
      AAVE[EvmChainId.ETHEREUM],
      MKR[EvmChainId.ETHEREUM],
      SNX[EvmChainId.ETHEREUM],
      CRV[EvmChainId.ETHEREUM],
      YFI[EvmChainId.ETHEREUM],
      ENJ[EvmChainId.ETHEREUM],
      COMP[EvmChainId.ETHEREUM],
      GALA[EvmChainId.ETHEREUM],
      XSUSHI[EvmChainId.ETHEREUM],
    ],
    // tokens for metapools begin
    ['0xBC6DA0FE9aD5f3b0d58160288917AA56653660E9']: [
      ETHEREUM_CRV_FRAX[EvmChainId.ETHEREUM],
    ], // alUSD
    ['0x865377367054516e17014CcdED1e7d814EDC9ce4']: [
      ETHEREUM_CRV_FRAX[EvmChainId.ETHEREUM],
    ], // Dola
    ['0xab5eB14c09D416F0aC63661E57EDB7AEcDb9BEfA']: [
      ETHEREUM_CRV_FRAX[EvmChainId.ETHEREUM],
    ], // msUSD
    ['0x4591DBfF62656E7859Afe5e45f6f47D3669fBB28']: [
      ETHEREUM_CRV_FRAX[EvmChainId.ETHEREUM],
    ], // mkUSD
    ['0xd7C9F0e536dC865Ae858b0C0453Fe76D13c3bEAc']: [
      ETHEREUM_CRV_FRAX[EvmChainId.ETHEREUM],
    ], // XAI
    ['0x15f74458aE0bFdAA1a96CA1aa779D715Cc1Eefe4']: [
      ETHEREUM_CRV_FRAX[EvmChainId.ETHEREUM],
    ], // GRAI
    ['0x3C20Ac688410bE8F391bE1fb00AFc5C212972F86']: [
      ETHEREUM_CRV_FRAX[EvmChainId.ETHEREUM],
    ], // clevUSD
    ['0xfF709449528B6fB6b88f557F7d93dEce33bca78D']: [
      ETHEREUM_CRV_FRAX[EvmChainId.ETHEREUM],
    ], // ApeUSD
    [LUSD_ADDRESS[EvmChainId.ETHEREUM]]: [
      ETHEREUM_CRV_FRAX[EvmChainId.ETHEREUM],
    ],
    ['0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa']: [
      ETHEREUM_CRV_REN_WSBTC[EvmChainId.ETHEREUM],
    ], // TBTC
    ['0x8751D4196027d4e6DA63716fA7786B5174F04C15']: [
      ETHEREUM_CRV_REN_WSBTC[EvmChainId.ETHEREUM],
    ], // wibBTC
    ['0x9BE89D2a4cd102D8Fecc6BF9dA793be995C22541']: [
      ETHEREUM_CRV_REN_WSBTC[EvmChainId.ETHEREUM],
    ], // BBTC
    // tokens for metapools end
  },
  [EvmChainId.POLYGON]: {
    [FRAX_ADDRESS[EvmChainId.POLYGON]]: [FXS[EvmChainId.POLYGON]],
    [FXS_ADDRESS[EvmChainId.POLYGON]]: [FRAX[EvmChainId.POLYGON]],
    [BCT_ADDRESS[EvmChainId.POLYGON]]: [KLIMA[EvmChainId.POLYGON]],
    [KLIMA_ADDRESS[EvmChainId.POLYGON]]: [BCT[EvmChainId.POLYGON]],
    // THREE
    ['0x9B034262e0095210ab9ddec60199741a8a1FbFe7']: [
      AAVE[EvmChainId.POLYGON],
      LINK[EvmChainId.POLYGON],
      MANA[EvmChainId.POLYGON],
      SNX[EvmChainId.POLYGON],
      CRV[EvmChainId.POLYGON],
      YFI[EvmChainId.POLYGON],
      GNS[EvmChainId.POLYGON],
      SAND[EvmChainId.POLYGON],
      STG[EvmChainId.POLYGON],
      UNI[EvmChainId.POLYGON],
      SUSHI[EvmChainId.POLYGON],
      RNDR[EvmChainId.POLYGON],
      TEL[EvmChainId.POLYGON],
      GRT[EvmChainId.POLYGON],
      BAL[EvmChainId.POLYGON],
      QUICK[EvmChainId.POLYGON],
      OCEAN[EvmChainId.POLYGON],
      XSUSHI[EvmChainId.POLYGON],
      KNCv2[EvmChainId.POLYGON],
      WAVAX[EvmChainId.POLYGON],
      JUGNI[EvmChainId.POLYGON],
    ],
  },
  [EvmChainId.ARBITRUM]: {
    [FRAX_ADDRESS[EvmChainId.ARBITRUM]]: [FXS[EvmChainId.ARBITRUM]],
    [FXS_ADDRESS[EvmChainId.ARBITRUM]]: [FRAX[EvmChainId.ARBITRUM]],
    ['0xaFAfd68AFe3fe65d376eEC9Eab1802616cFacCb8']: [
      SolvBTC[EvmChainId.ARBITRUM],
    ], // SolvBTC.ENA
    ['0x346c574C56e1A4aAa8dc88Cda8F7EB12b39947aB']: [
      SolvBTC[EvmChainId.ARBITRUM],
    ], // SolvBTC.BBN
  },
  [EvmChainId.FANTOM]: {
    [FRAX_ADDRESS[EvmChainId.FANTOM]]: [FXS[EvmChainId.FANTOM]],
    [FXS_ADDRESS[EvmChainId.FANTOM]]: [FRAX[EvmChainId.FANTOM]],
  },
  [EvmChainId.BSC]: {
    [FRAX_ADDRESS[EvmChainId.BSC]]: [FXS[EvmChainId.BSC]],
    [FXS_ADDRESS[EvmChainId.BSC]]: [FRAX[EvmChainId.BSC]],
  },
  [EvmChainId.AVALANCHE]: {
    [FRAX_ADDRESS[EvmChainId.AVALANCHE]]: [FXS[EvmChainId.AVALANCHE]],
    [FXS_ADDRESS[EvmChainId.AVALANCHE]]: [FRAX[EvmChainId.AVALANCHE]],
  },
  [EvmChainId.HARMONY]: {
    [FRAX_ADDRESS[EvmChainId.HARMONY]]: [FXS[EvmChainId.HARMONY]],
    [FXS_ADDRESS[EvmChainId.HARMONY]]: [FRAX[EvmChainId.HARMONY]],
  },
  [EvmChainId.BOBA]: {
    [FRAX_ADDRESS[EvmChainId.BOBA]]: [FXS[EvmChainId.BOBA]],
    [FXS_ADDRESS[EvmChainId.BOBA]]: [FRAX[EvmChainId.BOBA]],
  },
  [EvmChainId.OPTIMISM]: {
    [FRAX_ADDRESS[EvmChainId.OPTIMISM]]: [FXS[EvmChainId.OPTIMISM]],
    [FXS_ADDRESS[EvmChainId.OPTIMISM]]: [FRAX[EvmChainId.OPTIMISM]],
  },
  [EvmChainId.ROOTSTOCK]: {
    [xSolvBTC_ADDRESS[EvmChainId.ROOTSTOCK]]: [SolvBTC[EvmChainId.ROOTSTOCK]],
    [SolvBTC_ADDRESS[EvmChainId.ROOTSTOCK]]: [xSolvBTC[EvmChainId.ROOTSTOCK]],
  },
} as const satisfies Partial<Record<EvmChainId, Record<Address, EvmToken[]>>>
