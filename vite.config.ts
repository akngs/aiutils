import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
    globals: true,
  },
  server: {
    watch: {
      ignored: ['**/node_modules/**', '**/.git/**', '.svelte-kit/**', '.vscode/**'],
    },
  },
})
