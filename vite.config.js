import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  ssgOptions: {
    formatting: 'minify',
    dirStyle: 'nested',
    includedRoutes: (paths) => paths.filter((path) => !path.includes(':')),
  },
})
