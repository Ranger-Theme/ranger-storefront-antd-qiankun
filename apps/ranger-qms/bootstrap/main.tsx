import { createRoot } from 'react-dom/client'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import 'antd/dist/reset.css'

import { qiankunActions } from '@/actions'
import App from './App'

const renderApp = (namespace: string = 'qms', container?: HTMLElement, state?: any) => {
  // 如果是在主应用的环境下就挂载主应用的节点，否则挂载到本地
  const rootElement: HTMLElement = (
    container ? container.querySelector(`#${namespace}`) : document.getElementById(namespace)
  ) as HTMLElement
  createRoot(rootElement).render(<App namespace={namespace} state={state} />)
}

const initQianKun = () => {
  renderWithQiankun({
    mount(props: any) {
      console.info('QMS子应用开始挂载......')
      const { namespace, container, state } = props
      renderApp(namespace, container, state)
      qiankunActions.setActions(props)
    },
    bootstrap() {},
    update() {},
    unmount() {
      console.info('QMS子应用已经卸载......')
    }
  })
}

// 判断当前应用是否在主应用中
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : renderApp()
