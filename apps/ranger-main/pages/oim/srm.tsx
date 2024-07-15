import { useEffect } from 'react'
import { loadMicroApp, type MicroApp } from '@ranger-theme/qiankun'

let app: MicroApp | null = null

const SRM = () => {
  const isProd: boolean = import.meta.env.PROD

  useEffect(() => {
    app = loadMicroApp(
      {
        name: 'oim__srm',
        entry: isProd ? '/oim/srm/' : 'http://127.0.0.1:3001',
        container: '#oim__srm',
        props: {
          namespace: 'srm'
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
      <div id="oim__srm" />
    </div>
  )
}

export default SRM
