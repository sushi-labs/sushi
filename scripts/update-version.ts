import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

// Writes the current package.json version to `./src/version.ts`.
const versionFilePath = join(import.meta.dirname, '../src/version.ts')
const packageJsonPath = join(import.meta.dirname, '../src/package.json')
const packageVersion = JSON.parse(
  await readFile(packageJsonPath, 'utf8'),
).version
await writeFile(versionFilePath, `export const version = '${packageVersion}'\n`)
