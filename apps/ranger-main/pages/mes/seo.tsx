import { useEffect, useRef } from 'react'
import { loadMicroApp, type MicroApp } from '@ranger-theme/qiankun'

let app: MicroApp | null = null

const SEO = () => {
  const containerRef = useRef<any>(null)
  const isProd: boolean = import.meta.env.PROD

  useEffect(() => {
    app = loadMicroApp(
      {
        name: 'ocloud__seo',
        entry: isProd ? '/ocloud/seo/' : 'http://127.0.0.1:3003',
        // container: '#ocloud__seo',
        container: containerRef.current,
        props: {
          namespace: 'seo'
        }
      },
      {
        singular: true,
        sandbox: {
          strictStyleIsolation: true,
          experimentalStyleIsolation: true
        }
      }
    )

    return () => {
      if (app && app.getStatus() === 'MOUNTED') {
        app.unmount()
      }
      app = null
    }
  }, [])

  return (
    <div id="ocloud__seo">
      <div ref={containerRef} />
    </div>
  )
}

export default SEO
