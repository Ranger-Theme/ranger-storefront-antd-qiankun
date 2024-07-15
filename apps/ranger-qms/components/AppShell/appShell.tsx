import { App } from 'antd'
import type { FC, PropsWithChildren } from 'react'

import { useAppShell } from '@/hooks/AppShell'

const AppShell: FC<PropsWithChildren> = ({ children }) => {
  useAppShell()

  return <App>{children}</App>
}

export default AppShell
