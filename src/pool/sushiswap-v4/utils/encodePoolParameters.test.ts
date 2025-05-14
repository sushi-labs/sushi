import { expect, test } from 'vitest'
import { encodePoolParameters } from './encodePoolParameters.js'

test('encode clPool params', () => {
  expect(
    encodePoolParameters({
      tickSpacing: -4771792,
    }),
  ).toBe('0x000000000000000000000000000000000000000000000000000000b730300000')

  expect(
    encodePoolParameters({
      tickSpacing: 4771792,
    }),
  ).toBe('0x00000000000000000000000000000000000000000000000000000048cfd00000')
  expect(
    encodePoolParameters({
      tickSpacing: 10,
      hooksRegistration: {
        beforeSwap: true,
      },
    }),
  ).toBe('0x00000000000000000000000000000000000000000000000000000000000a0040')
})
