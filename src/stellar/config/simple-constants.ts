import type { StellarContractAddress } from '../address.js'
import { StellarChainId } from '../chain/chains.js'

export const stellarNativeAddress =
  'GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' as const

export const SUSHISWAP_V3_FACTORY_ADDRESS: Record<
  StellarChainId,
  StellarContractAddress
> = {
  [StellarChainId.STELLAR]:
    'CCRSMJDITH3VK5QOGYCVZDAKIY5GL3RCG4TCVLIAVB662IW2V5KJGZGF',
}

export const SUSHISWAP_V3_INIT_CODE_HASH: Record<StellarChainId, string> = {
  [StellarChainId.STELLAR]:
    '95a8e0018530226701ef8d31c7d4c2fe20ed9d7c303a14a70c3d96848ca4fa54',
}

export const SUSHISWAP_V3_POSITION_MANAGER: Record<
  StellarChainId,
  StellarContractAddress
> = {
  [StellarChainId.STELLAR]:
    'CC5CQHSGZEVKPDLMYTJYGUBDL5UW4NBMTRQ5Y43YDBJTJZKMZMKCEEDU',
}

export const SUSHISWAP_V3_TICK_LENS: Record<
  StellarChainId,
  StellarContractAddress
> = {
  [StellarChainId.STELLAR]:
    'CDFGDFKEN7EVMI3DKIEQ6BKDAKEPHTEPWC6G2ZTDY7ATVCLD24AAU2IN',
}

export const SUSHISWAP_V3_QUOTER: Record<
  StellarChainId,
  StellarContractAddress
> = {
  [StellarChainId.STELLAR]:
    'CD3YDAM5QV235R4PNPJB4J2STZRJGMSB6KR3R2VATKULSLHZNI5KWLPH',
}
