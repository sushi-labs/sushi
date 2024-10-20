import { existsSync, writeFileSync } from 'node:fs'
import * as path from 'node:path'
import { fileURLToPath } from 'url'
import { ChainId } from './id.js'
import type { Chain } from './index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const additional = [
  {
    name: 'ApeChain',
    chain: 'apechain',
    rpc: ['https://rpc.apechain.com'],
    faucets: [],
    nativeCurrency: {
      name: 'ApeCoin',
      symbol: 'APE',
      decimals: 18,
    },
    infoURL: 'https://apechain.com',
    shortName: 'apechain',
    chainId: 33139,
    networkId: 33139,
    icon: 'apechain',
    explorers: [
      {
        name: 'ApeChain Explorer',
        url: 'https://apescan.io',
        standard: 'EIP3091',
      },
    ],
  },
] as const
;(async () => {
  const file = path.resolve(__dirname, './generated-chain-data.ts')
  if (!existsSync(file)) {
    const chains = [
      ...(await fetch('https://chainid.network/chains.json').then((data) =>
        data.json(),
      )),
      ...additional,
    ] as Chain[]
    writeFileSync(
      file,
      `// THIS IS A GENERATED FILE\n\nexport default ${JSON.stringify(
        chains
          .filter(({ chainId }) =>
            Object.values(ChainId).find((id) => id === chainId),
          )
          .map(
            ({
              chainId,
              explorers,
              nativeCurrency,
              name,
              shortName,
              parent,
            }) => ({
              chainId,
              explorers,
              nativeCurrency,
              name,
              shortName,
              parent,
            }),
          ),
        null,
        2,
      )} as const;\n\n`,
    )
  }
  process.exit(0)
})()
