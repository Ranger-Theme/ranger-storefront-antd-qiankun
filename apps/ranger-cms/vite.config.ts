import path from 'node:path'
import { defineConfig } from 'vite'
import qiankun from 'vite-plugin-qiankun'
import externalGlobals from 'rollup-plugin-external-globals'
import { baseConfig } from '@ranger-theme/vite-config'
import type { ConfigEnv } from 'vite'

import pkg from './package.json'

const externalPlugin: any = externalGlobals

const viteConfig: any = ({ mode }: ConfigEnv) => {
  // 微应用名字, 与主应用注册的微应用名字保持一致
  const appName: string = process.env.REACT_APP_QIANKUN_NAME || ''
  // useDevMode开启时与热更新插件冲突, 使用变量切换
  const useDevMode: boolean = process.env.DEV_MODULE === 'true'

  const defaultConfig = baseConfig({
    mode,
    pkg,
    https: false,
    port: 3001,
    htmlId: 'cms',
    outDir: 'build',
    isMicroApp: useDevMode,
    entry: path.resolve(__dirname, 'bootstrap/main.tsx'),
    buildOptions: {
      rollupOptions: {
        external: ['react', 'react-dom'],
        plugins: [
          externalPlugin({
            react: 'React',
            'react-dom': 'ReactDOM'
          })
        ]
      }
    }
  })
  const { plugins, server, ...restConfig } = defaultConfig

  return defineConfig({
    ...restConfig,
    base: useDevMode ? '/ocloud/cms' : './',
    define: {
      'import.meta.env.REACT_APP_QIANKUN_NAME': JSON.stringify(appName),
      'import.meta.env.REACT_APP_DEV_MODULE': JSON.stringify(useDevMode)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'),
        '~': path.resolve(__dirname, './')
      }
    },
    server: {
      ...server,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    },
    plugins: [
      ...(plugins || []),
      qiankun(appName, {
        useDevMode: true
      })
    ]
  })
}

export default viteConfig