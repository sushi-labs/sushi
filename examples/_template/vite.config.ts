import { defineConfig } from 'vite'

// TODO: Find a way to avoid this with dual package
export default defineConfig({
  define: {
    'process.env': {},
  },
})
