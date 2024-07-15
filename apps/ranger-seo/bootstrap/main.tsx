import { createRoot } from 'react-dom/client'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import 'antd/dist/reset.css'

import { qiankunActions } from '@/actions'
import App from './App'

const renderApp = (namespace: string = 'seo', container?: HTMLElement, state?: any) => {
  const rootElement: HTMLElement = (
    container ? container.querySelector(`#${namespace}`) : document.getElementById(namespace)
  ) as HTMLElement
  createRoot(rootElement).render(<App namespace={namespace} state={state} />)
}

const initQianKun = () => {
  renderWithQiankun({
    mount(props: any) {
      console.info('SEO子应用开始挂载......')
      const { container, namespace, state } = props
      renderApp(namespace, container, state)
      qiankunActions.setActions(props)
    },
    bootstrap() {},
    update() {},
    unmount() {
      console.info('SEO子应用已经卸载......')
    }
  })
}

// 判断当前应用是否在主应用中
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : renderApp()
