export const SushiSwapProtocol = {
  SUSHISWAP_V2: 'SUSHISWAP_V2',
  SUSHISWAP_V3: 'SUSHISWAP_V3',
  BLADE: 'BLADE',
} as const

export type SushiSwapProtocol =
  (typeof SushiSwapProtocol)[keyof typeof SushiSwapProtocol]

export type SushiSwapV2Protocol = (typeof SushiSwapProtocol)['SUSHISWAP_V2']
export type SushiSwapV3Protocol = (typeof SushiSwapProtocol)['SUSHISWAP_V3']
export type BladeProtocol = (typeof SushiSwapProtocol)['BLADE']
