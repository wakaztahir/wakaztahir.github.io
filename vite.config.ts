import solid from 'solid-start/vite'
import solidStatic from 'solid-start-static'
import {defineConfig} from 'vite'

export default defineConfig(() => {
  return {
    plugins: [solid({
      adapter: solidStatic(),
      ssr: true,
    })],
  }
})