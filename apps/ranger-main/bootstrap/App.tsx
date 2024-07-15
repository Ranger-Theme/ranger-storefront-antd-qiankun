import { BrowserRouter } from 'react-router-dom'
import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs'
import { ThemeProvider } from '@emotion/react'
import { ConfigProvider } from 'antd'

import AppShell from '@/components/AppShell'
import AppRoutes from '@/components/AppRoutes'

const App = () => {
  return (
    <StyleProvider transformers={[legacyLogicalPropertiesTransformer]}>
      <ThemeProvider theme={{}}>
        <ConfigProvider prefixCls="ocloud" iconPrefixCls="ocloud">
          <BrowserRouter>
            <AppShell>
              <AppRoutes />
            </AppShell>
            <div className="qiankun">
              <div id="ocloud__cms" />
              <div id="ocloud__i18n" />
            </div>
          </BrowserRouter>
        </ConfigProvider>
      </ThemeProvider>
    </StyleProvider>
  )
}

export default App
