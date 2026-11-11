import invariant from 'tiny-invariant'
import {
  type Address,
  encodeAbiParameters,
  type Hex,
  keccak256,
  numberToHex,
  zeroAddress,
} from 'viem'
import type { EvmCurrency } from '../../currency/currency.js'
import {
  SUSHISWAP_V4_CL_HOOKS_REGISTRATION_OFFSET,
  SUSHISWAP_V4_DYNAMIC_FEE_FLAG,
  SUSHISWAP_V4_MAX_LP_FEE,
  SUSHISWAP_V4_MAX_TICK_SPACING,
  SUSHISWAP_V4_MIN_TICK_SPACING,
  type SushiSwapV4CLHooksRegistration,
} from './constants.js'

/** A pool's identity in the pool manager, as passed to it on chain. */
export interface SushiSwapV4PoolKey {
  currency0: Address
  currency1: Address
  hooks: Address
  poolManager: Address
  fee: number
  parameters: Hex
}

export const sushiSwapV4PoolKeyAbiParameter = {
  type: 'tuple',
  components: [
    { name: 'currency0', type: 'address' },
    { name: 'currency1', type: 'address' },
    { name: 'hooks', type: 'address' },
    { name: 'poolManager', type: 'address' },
    { name: 'fee', type: 'uint24' },
    { name: 'parameters', type: 'bytes32' },
  ],
} as const

const TICK_SPACING_OFFSET = 16n
const UINT24_MASK = 0xffffffn
const HOOKS_REGISTRATION_MASK = 0xffffn

/** The address the pool manager knows a currency by; native is the zero address. */
export function getSushiSwapV4CurrencyAddress(currency: EvmCurrency): Address {
  return currency.type === 'native' ? zeroAddress : currency.address
}

/** Whether `a` must be a pool's currency0 when paired with `b`. */
export function sushiSwapV4CurrencySortsBefore(
  a: EvmCurrency,
  b: EvmCurrency,
): boolean {
  invariant(a.chainId === b.chainId, 'CHAIN_IDS')
  const addressA = getSushiSwapV4CurrencyAddress(a).toLowerCase()
  const addressB = getSushiSwapV4CurrencyAddress(b).toLowerCase()
  invariant(addressA !== addressB, 'ADDRESSES')
  return addressA < addressB
}

export function sortSushiSwapV4Currencies<TCurrency extends EvmCurrency>(
  a: TCurrency,
  b: TCurrency,
): [TCurrency, TCurrency] {
  return sushiSwapV4CurrencySortsBefore(a, b) ? [a, b] : [b, a]
}

export function isSushiSwapV4DynamicFee(fee: number): boolean {
  return fee === SUSHISWAP_V4_DYNAMIC_FEE_FLAG
}

export function encodeSushiSwapV4HooksRegistration(
  registration: SushiSwapV4CLHooksRegistration | undefined,
): number {
  let bitmap = 0
  for (const [key, enabled] of Object.entries(registration ?? {})) {
    if (enabled) {
      bitmap |=
        1 <<
        SUSHISWAP_V4_CL_HOOKS_REGISTRATION_OFFSET[
          key as keyof SushiSwapV4CLHooksRegistration
        ]
    }
  }
  return bitmap
}

/** Packs a CL pool's tick spacing (bits 16-39) and hook registration bitmap (bits 0-15). */
export function encodeSushiSwapV4CLPoolParameters({
  tickSpacing,
  hooksRegistration,
}: {
  tickSpacing: number
  hooksRegistration?: SushiSwapV4CLHooksRegistration | number | undefined
}): Hex {
  invariant(
    Number.isInteger(tickSpacing) &&
      tickSpacing >= SUSHISWAP_V4_MIN_TICK_SPACING &&
      tickSpacing <= SUSHISWAP_V4_MAX_TICK_SPACING,
    'TICK_SPACING',
  )
  const bitmap =
    typeof hooksRegistration === 'number'
      ? hooksRegistration
      : encodeSushiSwapV4HooksRegistration(hooksRegistration)
  invariant(
    Number.isInteger(bitmap) && BigInt(bitmap) <= HOOKS_REGISTRATION_MASK,
    'HOOKS_REGISTRATION',
  )

  return numberToHex(
    (BigInt(tickSpacing) << TICK_SPACING_OFFSET) | BigInt(bitmap),
    { size: 32 },
  )
}

export function decodeSushiSwapV4CLPoolParameters(parameters: Hex): {
  tickSpacing: number
  hooksRegistration: number
} {
  const value = BigInt(parameters)
  return {
    tickSpacing: Number(
      BigInt.asIntN(24, (value >> TICK_SPACING_OFFSET) & UINT24_MASK),
    ),
    hooksRegistration: Number(value & HOOKS_REGISTRATION_MASK),
  }
}

export function validateSushiSwapV4Fee(fee: number) {
  invariant(
    Number.isInteger(fee) &&
      ((fee >= 0 && fee <= SUSHISWAP_V4_MAX_LP_FEE) ||
        isSushiSwapV4DynamicFee(fee)),
    'FEE',
  )
}

export function getSushiSwapV4PoolKey({
  currencyA,
  currencyB,
  fee,
  tickSpacing,
  poolManager,
  hooks = zeroAddress,
  hooksRegistration,
}: {
  currencyA: EvmCurrency
  currencyB: EvmCurrency
  fee: number
  tickSpacing: number
  poolManager: Address
  hooks?: Address
  hooksRegistration?: SushiSwapV4CLHooksRegistration | number
}): SushiSwapV4PoolKey {
  validateSushiSwapV4Fee(fee)
  const [currency0, currency1] = sortSushiSwapV4Currencies(currencyA, currencyB)

  return {
    currency0: getSushiSwapV4CurrencyAddress(currency0),
    currency1: getSushiSwapV4CurrencyAddress(currency1),
    hooks,
    poolManager,
    fee,
    parameters: encodeSushiSwapV4CLPoolParameters({
      tickSpacing,
      hooksRegistration,
    }),
  }
}

/** The pool ID: keccak256 of the ABI-encoded pool key. */
export function computeSushiSwapV4PoolId(poolKey: SushiSwapV4PoolKey): Hex {
  return keccak256(
    encodeAbiParameters([sushiSwapV4PoolKeyAbiParameter], [poolKey]),
  )
}
