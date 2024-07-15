import { useEffect } from 'react'
import { loadMicroApp, type MicroApp } from '@ranger-theme/qiankun'

let app: MicroApp | null = null

const I18n = () => {
  const isProd: boolean = import.meta.env.PROD

  useEffect(() => {
    app = loadMicroApp(
      {
        name: 'ocloud__i18n',
        entry: isProd ? '/ocloud/i18n/' : 'http://127.0.0.1:3002',
        container: '#ocloud__i18n',
        props: {
          namespace: 'i18n'
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
      <div id="ocloud__i18n" />
    </div>
  )
}

export default I18n
