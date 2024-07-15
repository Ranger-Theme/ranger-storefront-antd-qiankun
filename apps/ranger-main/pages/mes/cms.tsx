import { useEffect } from 'react'
import { loadMicroApp, type MicroApp } from '@ranger-theme/qiankun'

let app: MicroApp | null = null

const CMS = () => {
  const isProd: boolean = import.meta.env.PROD

  useEffect(() => {
    app = loadMicroApp(
      {
        name: 'ocloud__cms',
        entry: isProd ? '/ocloud/cms/' : 'http://127.0.0.1:3001',
        container: '#ocloud__cms',
        props: {
          namespace: 'cms'
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
    <div>
      <div id="ocloud__cms" />
    </div>
  )
}

export default CMS
