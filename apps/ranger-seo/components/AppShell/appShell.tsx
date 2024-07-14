import type { FC, PropsWithChildren } from 'react'

import { useAppShell } from '@/hooks/AppShell'

const AppShell: FC<PropsWithChildren> = ({ children }) => {
  useAppShell()

  return <div>{children}</div>
}

export default AppShell
