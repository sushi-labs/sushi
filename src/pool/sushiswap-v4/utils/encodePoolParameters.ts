import { type Hex, concat, encodePacked, pad } from 'viem'
import type { CLPoolParameter } from '../types.js'
import { encodeHooksRegistration } from './encodeHooksRegistration.js'

const encodeCLPoolParameters = (params: CLPoolParameter): Hex => {
  const hooks = encodeHooksRegistration(params?.hooksRegistration)
  const tickSpacing = encodePacked(['int24'], [params.tickSpacing])

  return pad(concat([tickSpacing, hooks]))
}

export const encodePoolParameters = (params: CLPoolParameter): Hex => {
  return encodeCLPoolParameters(params)
}
