import { EvmChainId } from '../../../../chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const PLUME_pUSD_ADDRESS = {
  [EvmChainId.PLUME]: '0xb12c13e66ade1f72f71834f2fc5082db8c091358',
} as const

export const PLUME_pUSD = addressMapToTokenMap(
  { decimals: 6, symbol: 'pUSD', name: 'Plume USD' },
  PLUME_pUSD_ADDRESS,
)
