import type { FC } from 'react'
import { type Address, EvmChain } from 'sushi'

interface ExplorerAddress {
  address: Address
  chainId: number
}

export const ExplorerAddressLink: FC<ExplorerAddress> = ({
  address,
  chainId,
}) => {
  return (
    <a
      href={EvmChain.from(chainId)?.getAccountUrl(address)}
      target={'_blank'}
      rel={'noopener noreferrer'}
    >
      <code className="vocs_Code">{address}</code>
    </a>
  )
}
