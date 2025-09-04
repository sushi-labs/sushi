import { join } from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    typecheck: {
      enabled: true,
    },
    alias: {
      '~contracts': join(__dirname, '../contracts'),
      '~test': join(__dirname, '.'),

      '~': join(__dirname, '../src'),
      '~generic': join(__dirname, '../src/generic'),
      '~evm': join(__dirname, '../src/evm'),
      '~mvm': join(__dirname, '../src/mvm'),
      '~tvm': join(__dirname, '../src/tvm'),
      '~chainweb': join(__dirname, '../src/chainweb'),
    },
    benchmark: {
      outputFile: './bench/report.json',
      reporters: process.env.CI ? ['default'] : ['verbose'],
    },
    coverage: {
      all: false,
      provider: 'v8',
      reporter: process.env.CI ? ['lcov'] : ['text', 'json', 'html'],
      exclude: [
        '**/errors/utils.ts',
        '**/_cjs/**',
        '**/_esm/**',
        '**/_types/**',
        '**/*.bench.ts',
        '**/*.bench-d.ts',
        '**/*.test.ts',
        '**/*.test-d.ts',
        '**/test/**',
      ],
    },
    environment: 'node',
    include: ['src/**/*.test.ts'],
    setupFiles: [join(__dirname, './setup-files.ts')],
    globalSetup: [join(__dirname, './global-setup.ts')],
    testTimeout: 10_000,
  },
})
