import { join } from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    alias: {
      '~contracts': join(__dirname, '../contracts'),
      '~sushi': join(__dirname, '../src'),
      '~test': join(__dirname, '.'),
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
