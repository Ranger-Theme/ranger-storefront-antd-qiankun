import { createRoot } from 'react-dom/client'

import App from './App'
import { bootstrap } from './qiankun'

const renderApp = async () => {
  const rootElement: HTMLElement = document.getElementById('root') as HTMLElement

  if (rootElement) {
    createRoot(rootElement).render(<App />)
    await bootstrap()
  }
}

renderApp()
