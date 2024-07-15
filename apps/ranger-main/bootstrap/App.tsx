import { BrowserRouter } from 'react-router-dom'
import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs'
import { ThemeProvider } from '@emotion/react'
import { ConfigProvider } from 'antd'
import { start } from '@ranger-theme/qiankun'

import AppShell from '@/components/AppShell'
import AppRoutes from '@/components/AppRoutes'

const App = () => {
  start()

  return (
    <StyleProvider transformers={[legacyLogicalPropertiesTransformer]}>
      <ThemeProvider theme={{}}>
        <ConfigProvider prefixCls="ocloud" iconPrefixCls="ocloud">
          <BrowserRouter>
            <AppShell>
              <AppRoutes />
            </AppShell>
          </BrowserRouter>
        </ConfigProvider>
      </ThemeProvider>
    </StyleProvider>
  )
}

export default App
