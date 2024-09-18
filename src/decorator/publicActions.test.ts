import { expect, test } from 'vitest'
import { publicClient } from '~test/utils.js'
import { publicActionSushi } from './publicActions.js'

test('extend', async () => {
  const client = await publicClient.extend(publicActionSushi)
  expect(client).toBeDefined()
})
