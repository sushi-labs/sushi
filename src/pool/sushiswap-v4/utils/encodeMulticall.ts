import { type Hex, encodeFunctionData } from 'viem'
import { multicallAbi_multicall } from '../../../abi/multicallAbi/multicallAbi_multicall.js'

export const encodeMulticall = (calldatas: Hex | Hex[]): Hex => {
  if (!Array.isArray(calldatas)) {
    calldatas = [calldatas]
  }

  return calldatas.length === 1
    ? (calldatas[0] as Hex)
    : encodeFunctionData({
        abi: multicallAbi_multicall,
        functionName: 'multicall',
        args: [calldatas],
      })
}
