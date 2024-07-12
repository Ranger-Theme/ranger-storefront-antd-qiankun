import { useEffect } from 'react'
import { start } from '@ranger-theme/qiankun'

const I18n = () => {
  useEffect(() => {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true
      start({
        singular: true,
        sandbox: {
          strictStyleIsolation: true,
          experimentalStyleIsolation: true
        }
      })
    }

    return () => {
      window.qiankunStarted = false
    }
  }, [])

  return (
    <div>
      <div id="ocloud__i18n" />
    </div>
  )
}

export default I18n
