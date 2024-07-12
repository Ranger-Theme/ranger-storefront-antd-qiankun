import path from 'node:path'
import { defineConfig } from 'vite'
import type { ConfigEnv } from 'vite'

import { baseConfig } from '@ranger-theme/vite-config'

import pkg from './package.json'

const viteConfig: any = ({ mode }: ConfigEnv) => {
  const defaultConfig = baseConfig({
    mode,
    pkg,
    https: false,
    port: 3000,
    outDir: 'build',
    entry: path.resolve(__dirname, 'bootstrap/main.tsx')
  })

  return defineConfig({
    ...defaultConfig,
    base: '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'),
        '~': path.resolve(__dirname, './')
      }
    }
  })
}

export default viteConfig
