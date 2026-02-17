import type { FC, ReactElement } from 'react'
import { type AddressFor, type ChainId, getChainById } from 'sushi'

export type NetworkTableFormatter<C extends ChainId = ChainId> = ({
  chainId,
  value,
}: {
  chainId: C
  value: AddressFor<C>
}) => ReactElement

const formatExplorerLink: NetworkTableFormatter = ({ chainId, value }) => (
  <a
    href={getChainById(chainId).getAccountUrl(value)}
    target={'_blank'}
    rel={'noopener noreferrer'}
  >
    <code className="vocs_Code">{value}</code>
  </a>
)

const formatCode: NetworkTableFormatter = ({ value }) => (
  <code className="vocs_Code">{value}</code>
)

interface NetworkTable<C extends ChainId = ChainId> {
  title: string
  data: Record<C, AddressFor<C> | AddressFor<C>[]>
  formatter?: NetworkTableFormatter<C>
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
          const chainId = +key as ChainId
          if (!value || value.length === 0) return null
          return (
            <tr key={key} className="vocs_TableRow">
              <td className="vocs_TableCell">
                {getChainById(chainId).name.toUpperCase()}
              </td>
              <td className="vocs_TableCell">
                {Array.isArray(value) ? (
                  <ul>
                    {value.map((v) => (
                      <li key={v}>{formatter({ chainId, value: v })}</li>
                    ))}
                  </ul>
                ) : (
                  formatter({ chainId, value })
                )}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export const AddressTable: FC<{
  data: Record<ChainId, AddressFor<ChainId> | AddressFor<ChainId>[]>
}> = ({ data }) => {
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
                {getChainById(+key as ChainId)?.name.toUpperCase()}
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
