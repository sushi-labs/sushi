import { ChainId } from 'sushi'
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})

const blockNumber = await client.getBlockNumber()

export default [`Block number: ${blockNumber}\n\nChain Id:${ChainId.ETHEREUM}`]
