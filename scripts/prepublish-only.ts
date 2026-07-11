import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const packageJsonPath = join(import.meta.dirname, '../src/package.json')
const packageJson = JSON.parse(await readFile(packageJsonPath, 'utf8'))

// NOTE: We explicitly don't want to publish the type field.
// We create a separate package.json for `dist/cjs` and `dist/esm` that has the type field.
delete packageJson.type

await writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2))
