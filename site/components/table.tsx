'use client'

import { type FC, type ReactElement, useEffect, useState } from 'react'
import { type AddressFor, type ChainId, getChainById, isChainId } from 'sushi'

const SUPPORTED_AGGREGATOR_CHAINS_URL = 'https://api.sushi.com/chains'

type NetworkTableFormatter<C extends ChainId = ChainId> = ({
  chainId,
  value,
}: {
  chainId: C
  value: AddressFor<C>
}) => ReactElement

const formatExplorerLink: NetworkTableFormatter = ({ chainId, value }) => (
  <a
    data-v
    href={getChainById(chainId).getAccountUrl(value)}
    target={'_blank'}
    rel={'noopener noreferrer'}
  >
    <code data-v>{value}</code>
  </a>
)

const formatCode: NetworkTableFormatter = ({ value }) => (
  <code data-v>{value}</code>
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
    <div data-v-table-wrapper>
      <table data-v>
        <thead>
          <tr>
            <th>Network</th>
            <th>{title}</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([key, value]) => {
            const chainId = +key as ChainId
            if (!value || value.length === 0) return null
            return (
              <tr key={key}>
                <td>{getChainById(chainId).name.toUpperCase()}</td>
                <td>
                  {Array.isArray(value) ? (
                    <ul data-v>
                      {value.map((v) => (
                        <li data-v key={v}>
                          {formatter({ chainId, value: v })}
                        </li>
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
    </div>
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
    <div data-v-table-wrapper>
      <table data-v>
        <thead>
          <tr>
            <th>Network</th>
            <th>{title}</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([key, value]) => {
            return (
              <tr key={key}>
                <td>{getChainById(+key as ChainId)?.name.toUpperCase()}</td>
                <td>
                  <a
                    data-v
                    href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {value}
                  </a>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

type SupportedAggregatorChainsState =
  | { status: 'loading'; chainIds: [] }
  | { status: 'success'; chainIds: number[] }
  | { status: 'error'; chainIds: []; message: string }

const getKnownChain = (chainId: number) => {
  if (!isChainId(chainId)) return undefined

  return getChainById(chainId)
}

const sortChainIds = (chainIds: number[]) => {
  return [...chainIds].sort((a, b) => {
    const aName = getKnownChain(a)?.name
    const bName = getKnownChain(b)?.name

    if (aName && bName) return aName.localeCompare(bName)
    if (aName) return -1
    if (bName) return 1

    return a - b
  })
}

export const SupportedAggregatorChainsTable: FC = () => {
  const [state, setState] = useState<SupportedAggregatorChainsState>({
    status: 'loading',
    chainIds: [],
  })

  useEffect(() => {
    const controller = new AbortController()

    async function loadSupportedChains() {
      try {
        const response = await fetch(SUPPORTED_AGGREGATOR_CHAINS_URL, {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }

        const chainIds = await response.json()

        if (!Array.isArray(chainIds)) {
          throw new Error('Expected an array of chain IDs')
        }

        setState({
          status: 'success',
          chainIds: sortChainIds(
            chainIds
              .map((chainId) => Number(chainId))
              .filter((chainId) => Number.isInteger(chainId)),
          ),
        })
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return

        setState({
          status: 'error',
          chainIds: [],
          message:
            error instanceof Error ? error.message : 'Unable to load chains',
        })
      }
    }

    loadSupportedChains()

    return () => controller.abort()
  }, [])

  if (state.status === 'loading') {
    return <p aria-live="polite">Loading live aggregator chain support...</p>
  }

  if (state.status === 'error') {
    return (
      <p role="alert">
        Could not load the live chain list from{' '}
        <code data-v>{SUPPORTED_AGGREGATOR_CHAINS_URL}</code>: {state.message}.
        See the{' '}
        <a data-v href="/sdk/concepts/chains">
          SDK chains
        </a>{' '}
        page for the full local chain registry.
      </p>
    )
  }

  return (
    <>
      <p>
        Sushi aggregator currently supports{' '}
        <strong>{state.chainIds.length}</strong> chains for swap, quote, and
        price features.
      </p>
      <div data-v-table-wrapper>
        <table data-v>
          <thead>
            <tr>
              <th>Chain</th>
              <th>Chain ID</th>
            </tr>
          </thead>
          <tbody>
            {state.chainIds.map((chainId) => {
              const chain = getKnownChain(chainId)

              return (
                <tr key={chainId}>
                  <td>
                    {chain ? (
                      <>
                        {chain.name}
                        <br />
                        <code data-v>{chain.key}</code>
                      </>
                    ) : (
                      'Unknown chain'
                    )}
                  </td>
                  <td>
                    <code data-v>{chainId}</code>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
