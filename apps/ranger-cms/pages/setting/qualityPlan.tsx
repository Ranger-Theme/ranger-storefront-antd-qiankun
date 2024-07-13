import { useEffect } from 'react'
import { start } from '@ranger-theme/qiankun'

const CMS = () => {
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
      <p>CMS Page</p>
      <div id="ocloud__cms" />
    </div>
  )
}

export default CMS
