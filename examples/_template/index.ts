import { ChainId } from 'sushi'
import { http, createPublicClient } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})

const blockNumber = await client.getBlockNumber()

export default [`Block number: ${blockNumber}\n\nChain Id:${ChainId.ETHEREUM}`]
