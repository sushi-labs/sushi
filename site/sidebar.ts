import type { Sidebar } from 'vocs'

export const sidebar = {
  '/': [
    {
      text: 'Introduction',
      items: [
        { text: 'Why Sushi', link: '/introduction' },
        { text: 'Installation', link: '/installation' },
        { text: 'Getting Started', link: '/getting-started' },
        { text: 'Platform Compatibility', link: '/compatibility' },
        { text: 'FAQ', link: '/faq' },
      ],
    },
    {
      text: 'App',
      collapsed: true,
      items: [],
    },
    {
      text: 'API',
      collapsed: true,
      items: [
        { text: 'Price', link: '/api/price' },
        { text: 'Quote', link: '/api/quote' },
        { text: 'Swap', link: '/api/swap' },
      ],
    },
    {
      text: 'Package',
      collapsed: true,
      items: [],
    },
    {
      text: 'Widget',
      collapsed: true,
      items: [],
    },
    {
      text: 'Contracts',
      collapsed: true,
      items: [],
    },
    // {
    //   text: 'Guides',
    //   items: [
    //     { text: 'Swap', link: '/swap' },
    //     { text: 'Cross-Chain Swap', link: '/cross-chain-swap' },
    //     { text: 'Add Liquidity', link: '/add-liquidity' },
    //     { text: 'Remove Liquidity', link: '/remove-liquidity' },
    //     { text: 'Zap', link: '/zap' },
    //     // { text: 'Migration Guide', link: '/migration-guide' },
    //     // { text: 'Ethers v5 → viem', link: '/ethers-migration' },
    //     // { text: 'TypeScript', link: '/typescript' },
    //     // { text: 'Error Handling', link: '/error-handling' },
    //     // { text: 'Blob Transactions', link: '/guides/blob-transactions' },
    //   ],
    // },
  ],
} as const satisfies Sidebar
