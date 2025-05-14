import type { Address, TypedDataDomain, TypedDataParameter } from 'viem'

const PERMIT2_DOMAIN_NAME = 'Permit2'

export function permit2Domain(
  permit2Address: Address | undefined,
  chainId: number,
): TypedDataDomain {
  return {
    name: PERMIT2_DOMAIN_NAME,
    chainId,
    verifyingContract: permit2Address,
  }
}

export type PermitData = {
  domain: TypedDataDomain
  types: Record<string, TypedDataParameter[]>
  values: any
}
