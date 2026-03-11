import type { StellarContractAddress } from '../address.js'
import { StellarChainId } from '../chain/chains.js'

export const stellarNativeAddress =
  'GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' as const

export const SUSHISWAP_V3_FACTORY_ADDRESS: Record<
  StellarChainId,
  StellarContractAddress
> = {
  [StellarChainId.STELLAR]:
    'CD3KRKGDRVWPXVB3VXLUMQKMX6XZ6Q2H334IVZD4XXNAMKSRVQL5GLYF',
}

export const SUSHISWAP_V3_INIT_CODE_HASH: Record<StellarChainId, string> = {
  [StellarChainId.STELLAR]:
    '48b28121451497952c1c35d58d4556f315a5b468ccde9fcd03f510aefa07c117',
}

export const SUSHISWAP_V3_POSITION_MANAGER: Record<
  StellarChainId,
  StellarContractAddress
> = {
  [StellarChainId.STELLAR]:
    'CARTUL5AWDZYBSN7HUUJZSKCAKCIAKM7M54Z76G6KRYCK4XPR3OHUQZ4',
}

export const SUSHISWAP_V3_TICK_LENS: Record<
  StellarChainId,
  StellarContractAddress
> = {
  [StellarChainId.STELLAR]:
    'CASKWJSINHFW7BF7RUOA4E2FP6B2TYRKFX2UOPWLCPOOPUR6UU3G2RWC',
}

export const SUSHISWAP_V3_QUOTER: Record<
  StellarChainId,
  StellarContractAddress
> = {
  [StellarChainId.STELLAR]:
    'CDMIM23WOUL5CZBKX3GOA3V5R5AMVIMTCP52KCDQORWELAPLJ27WZCHL',
}
