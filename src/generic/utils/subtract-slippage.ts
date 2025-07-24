import type { Amount } from '../currency/amount.js'
import type { Currency } from '../currency/currency.js'

/**
 *
 * @param amount The amount to subtract slippage from.
 * @param slippage The slippage percentage to subtract, represented as a decimal between 0 and 1 (e.g., 0.01 for 1%).
 *
 * @returns The amount after subtracting the slippage, eg. amount * 0.9 if slippage is 10% (0.1).
 */
export function subtractSlippage<TCurrency extends Currency>(
  amount: Amount<TCurrency>,
  slippage: number,
) {
  if (slippage < 0 || slippage > 1) {
    throw new Error('Slippage must be between 0 and 1')
  }

  return amount.mulHuman(1 - slippage)
}
