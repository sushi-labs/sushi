import { type Address, type Hex, encodeFunctionData } from 'viem'
import { permit2Abi_permit } from '../../../abi/permit2Abi/permit2Abi_permit.js'
import { permit2Abi_permitBatch } from '../../../abi/permit2Abi/permit2Abi_permitBatch.js'
import type { PermitBatch } from '../../../permit2/allowanceTransfer.js'
import type { Permit2Signature } from '../types.js'

export const encodePermit2 = (
  owner: Address,
  permit2Signature: Permit2Signature,
) => {
  const { signature, details, spender, sigDeadline } = permit2Signature
  const permitSingle = {
    details: {
      token: details.token as `0x${string}`,
      amount: BigInt(details.amount),
      expiration: Number(details.expiration),
      nonce: Number(details.nonce),
    },
    spender: spender as `0x${string}`,
    sigDeadline: BigInt(sigDeadline),
  }

  return encodeFunctionData({
    abi: permit2Abi_permit,
    functionName: 'permit',
    args: [owner, permitSingle, signature],
  })
}

export const encodePermit2Batch = (
  owner: Address,
  permit2Batch: PermitBatch,
  signatures: Hex,
) => {
  const permitBatch = {
    details: permit2Batch.details.map((detail) => {
      return {
        token: detail.token as `0x${string}`,
        amount: BigInt(detail.amount),
        expiration: Number(detail.expiration),
        nonce: Number(detail.nonce),
      }
    }),
    spender: permit2Batch.spender as `0x${string}`,
    sigDeadline: BigInt(permit2Batch.sigDeadline),
  }

  return encodeFunctionData({
    abi: permit2Abi_permitBatch,
    functionName: 'permitBatch',
    args: [owner, permitBatch, signatures],
  })
}
