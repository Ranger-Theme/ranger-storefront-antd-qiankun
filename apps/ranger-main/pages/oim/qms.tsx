import { useEffect } from 'react'
import { loadMicroApp, type MicroApp } from '@ranger-theme/qiankun'

let app: MicroApp | null = null

const QMS = () => {
  const isProd: boolean = import.meta.env.PROD

  useEffect(() => {
    app = loadMicroApp(
      {
        name: 'oim__qms',
        entry: isProd ? '/oim/qms/' : 'http://127.0.0.1:3002',
        container: '#oim__qms',
        props: {
          namespace: 'qms'
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
      <div id="oim__qms" />
    </div>
  )
}

export default QMS
