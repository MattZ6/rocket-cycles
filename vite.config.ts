import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

function resolvePath(folder: string) {
  return resolve(__dirname, 'src', folder)
}

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement: resolvePath('components') },
      { find: '@contexts', replacement: resolvePath('contexts') },
      { find: '@hooks', replacement: resolvePath('hooks') },
      { find: '@services', replacement: resolvePath('services') },
      { find: '@layouts', replacement: resolvePath('layouts') },
      { find: '@locales', replacement: resolvePath('locales') },
      { find: '@pages', replacement: resolvePath('pages') },
      { find: '@reducers', replacement: resolvePath('reducers') },
      { find: '@providers', replacement: resolvePath('providers') },
      { find: '@styles', replacement: resolvePath('styles') },
      { find: '@utils', replacement: resolvePath('utils') },
      { find: '@routes', replacement: resolvePath('routes') },
      { find: '@assets', replacement: resolvePath('assets') },
      { find: '@config', replacement: resolvePath('config') },
    ],
  },
})
