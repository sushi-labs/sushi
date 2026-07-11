import rehypeMathjax from 'rehype-mathjax'
import remarkMath from 'remark-math'
import { defineConfig } from 'vocs/config'
import pkg from '../src/package.json'
import { sidebar } from './sidebar'

export default defineConfig({
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? 'https://docs.sushi.com'
      : process.env.VERCEL_URL,
  title: 'Sushi 🧑‍🍳',
  // Twoslash surfaces relative links from dependency JSDoc (for example viem),
  // which are not routes in this site.
  checkDeadlinks: false,
  ogImageUrl:
    'https://vocs.dev/api/og?logo=%logo&title=%title&description=%description',
  titleTemplate: '%s · Sushi',
  description: '',
  editLink: {
    pattern: 'https://github.com/sushi-labs/sushi/edit/master/site/pages/:path',
    text: 'Suggest changes to this page',
  },
  iconUrl: { light: '/favicons/light.png', dark: '/favicons/dark.png' },
  // logoUrl: { light: '/icon-light.png', dark: '/icon-dark.png' },
  sidebar,
  rootDir: '.',
  srcDir: '.',
  topNav: [
    { text: 'Docs', link: '/what-is-sushi', match: '/' },
    {
      text: 'Examples',
      link: 'https://github.com/sushi-labs/sushi/tree/master/examples',
    },
    {
      text: pkg.version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/sushi-labs/sushi/blob/master/src/CHANGELOG.md',
        },
        {
          text: 'Contributing',
          link: 'https://github.com/sushi-labs/sushi/blob/master/.github/CONTRIBUTING.md',
        },
      ],
    },
  ],
  socials: [
    {
      icon: 'github',
      link: 'https://github.com/sushi-labs/sushi',
    },
    {
      icon: 'discord',
      link: 'https://www.sushi.com/discord',
    },
    {
      icon: 'x',
      link: 'https://www.sushi.com/twitter',
    },
  ],
  markdown: {
    remarkPlugins: [[remarkMath, { singleDollarTextMath: false }]],
    rehypePlugins: [rehypeMathjax],
  },
  codeHighlight: {
    langAlias: { math: 'text' },
  },
  vite: {
    ssr: {
      noExternal: ['sushi'], // <— force vocs to bundle sushi
    },
  },
})
