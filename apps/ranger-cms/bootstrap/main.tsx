import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import 'antd/dist/reset.css'

import App from './App'

const renderApp = (container?: HTMLElement, namespace?: string) => {
  // 如果是在主应用的环境下就挂载主应用的节点，否则挂载到本地
  const rootElement: HTMLElement = container || (document.getElementById('cms') as HTMLElement)
  createRoot(rootElement).render(
    <StrictMode>
      <App namespace={namespace} />
    </StrictMode>
  )
}

const initQianKun = () => {
  renderWithQiankun({
    mount(props: any) {
      console.info('CMS子应用开始挂载......')
      const { container, namespace } = props
      renderApp(container, namespace)
      // 监听主应用传值
      props.onGlobalStateChange((res: any) => {
        console.info(res.count)
      })
    },
    bootstrap() {},
    update() {},
    unmount() {
      console.info('CMS子应用已经卸载......')
    }
  })
}

// 判断当前应用是否在主应用中
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : renderApp()
