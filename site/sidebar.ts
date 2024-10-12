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
      text: 'SDK',
      collapsed: true,
      items: [
        { text: 'Installation', link: '/sdk/installation' },
        { text: 'Quote', link: '/sdk/quote' },
        { text: 'Swap', link: '/sdk/swap' },
        // { text: 'Limit', link: '/sdk/limit' },
        // { text: 'DCA', link: '/sdk/dca' },
        // { text: 'Cross-Chain Swap', link: '/sdk/cross-chain-swap' },
        { text: 'Viem', link: '/sdk/viem' },
      ],
    },
    {
      text: 'API',
      collapsed: true,
      items: [
        { text: 'Swap', link: '/api/swap' },
        { text: 'Price', link: '/api/price' },
        // { text: 'Quote', link: '/api/quote' },
      ],
    },
    // {
    //   text: 'Widget',
    //   collapsed: true,
    //   items: [],
    // },
    // {
    //   text: 'App',
    //   collapsed: true,
    //   items: [
    //     { text: 'Swap', link: '/app/swap' },
    //     { text: 'Limit', link: '/app/limit' },
    //     { text: 'DCA', link: '/app/dca' },
    //     { text: 'Cross-Chain Swap', link: '/app/cross-chain-swap' },
    //   ],
    // },
    {
      text: 'AMM',
      collapsed: true,
      items: [
        {
          text: 'clAMM',
          link: '/amm/clamm',
        },
        {
          text: 'cpAMM',
          link: '/amm/cpamm',
        },
        {
          text: 'lbAMM',
          link: '/amm/lbamm',
        },
        {
          text: 'fAMM',
          link: '/amm/famm',
        },
      ],
    },
    {
      text: 'Contracts',
      collapsed: true,
      items: [
        { text: 'SUSHI', link: '/contracts/sushi' },
        { text: 'xSUSHI', link: '/contracts/xsushi' },
        { text: 'Route Processor', link: '/contracts/route-processor' },
        { text: 'clAMM', link: '/contracts/clamm' },
        { text: 'cpAMM', link: '/contracts/cpamm' },
        // { text: 'lbAMM', link: '/contracts/lbamm' },
      ],
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
