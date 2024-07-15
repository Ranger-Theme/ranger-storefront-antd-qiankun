import { useEffect, useRef } from 'react'
import { loadMicroApp, type MicroApp } from '@ranger-theme/qiankun'

let app: MicroApp | null = null

const SEO = () => {
  const containerRef = useRef<any>(null)
  const isProd: boolean = import.meta.env.PROD

  useEffect(() => {
    app = loadMicroApp(
      {
        name: 'oim__wms',
        entry: isProd ? '/oim/wms/' : 'http://127.0.0.1:3003',
        container: containerRef.current,
        props: {
          namespace: 'wms'
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
    <div id="oim__wms">
      <div ref={containerRef} />
    </div>
  )
}

export default SEO
