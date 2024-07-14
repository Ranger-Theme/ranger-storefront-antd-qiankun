import { createRoot } from 'react-dom/client'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import 'antd/dist/reset.css'

import { qiankunActions } from '@/actions'
import App from './App'

const renderApp = (container?: HTMLElement, namespace?: string, state?: any) => {
  // 如果是在主应用的环境下就挂载主应用的节点，否则挂载到本地
  const rootElement: HTMLElement = container || (document.getElementById('i18n') as HTMLElement)
  createRoot(rootElement).render(<App namespace={namespace} state={state} />)
}

const initQianKun = () => {
  renderWithQiankun({
    mount(props: any) {
      console.info('I18n子应用开始挂载......')
      const { container, namespace, state } = props
      renderApp(container, namespace, state)
      qiankunActions.setActions(props)
    },
    bootstrap() {},
    update() {},
    unmount() {
      console.info('I18n子应用已经卸载......')
    }
  })
}

// 判断当前应用是否在主应用中
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : renderApp()
