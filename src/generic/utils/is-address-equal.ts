import { isEvmAddress } from '../../evm/currency/token.js'
import { isEvmAddressEqual } from '../../evm/utils/is-address-equal.js'
import { isMvmAddress } from '../../mvm/currency/token.js'
import { isMvmAddressEqual } from '../../mvm/utils/is-address-equal.js'
import { isStellarAddress } from '../../stellar/address.js'
import { isStellarAddressEqual } from '../../stellar/utils/is-address-equal.js'
import { isSvmAddress } from '../../svm/currency/token.js'
import { isSvmAddressEqual } from '../../svm/utils/is-address-equal.js'

export function isAddressEqual(a: string, b: string): boolean {
  if (isMvmAddress(a) && isMvmAddress(b)) {
    return isMvmAddressEqual(a, b)
  }

  if (isEvmAddress(a) && isEvmAddress(b)) {
    return isEvmAddressEqual(a, b)
  }

  if (isSvmAddress(a) && isSvmAddress(b)) {
    return isSvmAddressEqual(a, b)
  }

  if (isStellarAddress(a) && isStellarAddress(b)) {
    return isStellarAddressEqual(a, b)
  }

  return false
}
