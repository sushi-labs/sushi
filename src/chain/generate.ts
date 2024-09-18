import { existsSync, writeFileSync } from 'node:fs'
import * as path from 'node:path'
import { fileURLToPath } from 'url'
import { ChainId } from './id.js'
import type { Chain } from './index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
;(async () => {
  const file = path.resolve(__dirname, './generated-chain-data.ts')
  if (!existsSync(file)) {
    const chains = (await fetch('https://chainid.network/chains.json').then(
      (data) => data.json(),
    )) as Chain[]
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
