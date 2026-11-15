import type { Address } from 'viem'

/** Uniswap's Permit2, at the same address on every chain it is deployed to. */
export const PERMIT2_ADDRESS: Address =
  '0x000000000022D473030F116dDEE9F6B43aC78BA3'

export interface Permit2PermitDetails {
  token: Address
  /** uint160 */
  amount: bigint
  /** uint48, unix seconds */
  expiration: number
  /** uint48 */
  nonce: number
}

export interface Permit2PermitBatch {
  details: Permit2PermitDetails[]
  spender: Address
  sigDeadline: bigint
}

export const PERMIT2_PERMIT_BATCH_TYPES = {
  PermitBatch: [
    { name: 'details', type: 'PermitDetails[]' },
    { name: 'spender', type: 'address' },
    { name: 'sigDeadline', type: 'uint256' },
  ],
  PermitDetails: [
    { name: 'token', type: 'address' },
    { name: 'amount', type: 'uint160' },
    { name: 'expiration', type: 'uint48' },
    { name: 'nonce', type: 'uint48' },
  ],
} as const

/** EIP-712 typed data for signing a Permit2 `PermitBatch`. */
export function getPermit2PermitBatchTypedData({
  chainId,
  permitBatch,
}: {
  chainId: number
  permitBatch: Permit2PermitBatch
}) {
  return {
    domain: { name: 'Permit2', chainId, verifyingContract: PERMIT2_ADDRESS },
    types: PERMIT2_PERMIT_BATCH_TYPES,
    primaryType: 'PermitBatch',
    message: permitBatch,
  } as const
}
