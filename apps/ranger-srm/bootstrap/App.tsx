import { BrowserRouter } from 'react-router-dom'
import {
  StyleProvider,
  legacyLogicalPropertiesTransformer,
  createCache as createEmotionCache
} from '@ant-design/cssinjs'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import { ConfigProvider } from 'antd'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import { QiankunProvider, createCache, createContainer } from '@ranger-theme/qiankun'
import type { FC } from 'react'

import AppShell from '@/components/AppShell'
import AppRoutes from '@/components/AppRoutes'

interface AppProps {
  namespace?: string
  state?: any
}

const App: FC<AppProps> = ({ namespace = 'cms', state = {} }) => {
  const devModule: boolean = import.meta.env.REACT_APP_DEV_MODULE
  const appName: string = import.meta.env.REACT_APP_QIANKUN_NAME
  const container = createContainer(devModule, appName)
  const cache = createCache(devModule, container)
  const emotionCache = createEmotionCache()

  const getPopupContainer = () => {
    return devModule ? container : document.body
  }

  return (
    <CacheProvider value={cache}>
      <StyleProvider
        cache={emotionCache}
        container={container}
        transformers={[legacyLogicalPropertiesTransformer]}
      >
        <ThemeProvider theme={{}}>
          <ConfigProvider
            prefixCls={namespace}
            iconPrefixCls={namespace}
            getPopupContainer={getPopupContainer}
          >
            <QiankunProvider state={state}>
              <BrowserRouter basename={qiankunWindow.__POWERED_BY_QIANKUN__ ? '/oim/srm' : '/'}>
                <AppShell>
                  <AppRoutes />
                </AppShell>
              </BrowserRouter>
            </QiankunProvider>
          </ConfigProvider>
        </ThemeProvider>
      </StyleProvider>
    </CacheProvider>
  )
}

export default App
