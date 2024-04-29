import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  //  https://kit.svelte.dev/docs/integrations#preprocessors
  preprocess: [
    vitePreprocess(),
    sveltePreprocess(), // <style global> 을 쓰려면 필요
  ],

  extensions: ['.svelte', '.md', '.svx'],

  kit: {
    // https://kit.svelte.dev/docs/adapters
    adapter: adapter({
      maxDuration: 60, // for LLM streaming
    }),
  },
}

export default config
