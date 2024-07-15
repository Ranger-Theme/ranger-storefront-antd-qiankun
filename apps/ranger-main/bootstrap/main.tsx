import { createRoot } from 'react-dom/client'
import 'antd/dist/reset.css'

import App from './App'

const renderApp = async () => {
  const rootElement: HTMLElement = document.getElementById('root') as HTMLElement
  createRoot(rootElement).render(<App />)
}

renderApp()
