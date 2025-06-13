import type { FC, ReactElement } from 'react'
import { type EvmAddress, type EvmChainId, getEvmChainById } from 'sushi/evm'

export type NetworkTableFormatter = ({
  chainId,
  value,
}: {
  chainId: EvmChainId
  value: EvmAddress
}) => ReactElement

const formatExplorerLink: NetworkTableFormatter = ({ chainId, value }) => (
  <a
    href={getEvmChainById(chainId).getAccountUrl(value)}
    target={'_blank'}
    rel={'noopener noreferrer'}
  >
    <code className="vocs_Code">{value}</code>
  </a>
)

const formatCode: NetworkTableFormatter = ({ value }) => (
  <code className="vocs_Code">{value}</code>
)

interface NetworkTable {
  title: string
  data: Record<EvmChainId, EvmAddress>
  formatter?: NetworkTableFormatter
}

export const NetworkTable: FC<NetworkTable> = ({
  title,
  data,
  formatter = formatCode,
}) => {
  return (
    <table className="vocs_Table">
      <thead>
        <tr className="vocs_TableRow">
          <th className="vocs_TableHeader">Network</th>
          <th className="vocs_TableHeader">{title}</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(data).map(([key, value]) => {
          const chainId = +key as EvmChainId
          return (
            <tr key={key} className="vocs_TableRow">
              <td className="vocs_TableCell">
                {getEvmChainById(chainId).name.toUpperCase()}
              </td>
              <td className="vocs_TableCell">
                {formatter ? formatter({ chainId, value }) : value}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export const AddressTable: FC<{ data: Record<EvmChainId, EvmAddress> }> = ({
  data,
}) => {
  return (
    <NetworkTable
      data={data}
      title={'Address'}
      formatter={formatExplorerLink}
    />
  )
}

interface LinkTable {
  title: string
  data: Record<number, string>
}

export const LinkTable: FC<LinkTable> = ({ title, data }) => {
  return (
    <table className="vocs_Table--fullWidth">
      <thead>
        <tr className="vocs_TableRow">
          <th className="vocs_TableHeader">Network</th>
          <th className="vocs_TableHeader">{title}</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(data).map(([key, value]) => {
          return (
            <tr key={key} className="vocs_TableRow">
              <td className="vocs_TableCell">
                {getEvmChainById(+key as EvmChainId)?.name.toUpperCase()}
              </td>
              <td className="vocs_TableCell">
                <a
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vocs_Link"
                >
                  {value}
                </a>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
