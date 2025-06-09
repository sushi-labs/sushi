import type { FC, ReactElement } from 'react'
import { EvmChain } from 'sushi/chain'
import type { Address } from 'sushi/types'

export type NetworkTableFormatter = ({
  chainId,
  value,
}: {
  chainId: number
  value: string
}) => ReactElement

const formatExplorerLink: NetworkTableFormatter = ({ chainId, value }) => (
  <a
    href={EvmChain.from(chainId)?.getAccountUrl(value)}
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
  data: Record<number, string>
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
          return (
            <tr key={key} className="vocs_TableRow">
              <td className="vocs_TableCell">
                {EvmChain.from(+key)?.name.toUpperCase()}
              </td>
              <td className="vocs_TableCell">
                {formatter ? formatter({ chainId: +key, value }) : value}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export const AddressTable: FC<{ data: Record<number, Address> }> = ({
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
                {EvmChain.from(+key)?.name.toUpperCase()}
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
