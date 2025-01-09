import { defineConfig } from 'vocs'
import pkg from '../src/package.json'
import { sidebar } from './sidebar'

export default defineConfig({
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? 'https://docs.sushi.com'
      : process.env.VERCEL_URL,
  title: 'Sushi 🧑‍🍳',
  titleTemplate: '%s · Sushi',
  description: '',
  editLink: {
    pattern: 'https://github.com/sushi-labs/sushi/edit/master/site/pages/:path',
    text: 'Suggest changes to this page',
  },
  sidebar,
  rootDir: '.',
  topNav: [
    { text: 'Docs', link: '/getting-started', match: '/' },
    {
      text: 'Examples',
      link: 'https://github.com/sushi-labs/sushi/tree/master/examples',
    },
    {
      text: pkg.version,
      items: [
        {
          text: `Migrating to ${toPatchVersionRange(pkg.version)}`,
          link: `/docs/migration-guide#_${toPatchVersionRange(
            pkg.version,
          ).replace(/\./g, '-')}-breaking-changes`,
        },
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
})

function toPatchVersionRange(version: string) {
  const [major, minor] = version.split('.').slice(0, 2)
  return `${major}.${minor}.x`
}
