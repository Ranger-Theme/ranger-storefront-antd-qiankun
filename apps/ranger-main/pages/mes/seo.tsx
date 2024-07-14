import { useEffect } from 'react'
import { start } from '@ranger-theme/qiankun'

const SEO = () => {
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
      <div id="ocloud__seo" />
    </div>
  )
}

export default SEO
