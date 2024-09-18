import { expect, test } from 'vitest'
import { walletClient } from '~test/utils.js'

import { walletActionSushi } from './walletActions.js'

test('extend', async () => {
  const client = await walletClient.extend(walletActionSushi)
  expect(client).toBeDefined()
})
