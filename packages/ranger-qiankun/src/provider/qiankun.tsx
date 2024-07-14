import { createContext, useContext, useMemo } from 'react'
import type { FC, ReactNode } from 'react'

export interface QiankunProviderProps {
  children: ReactNode
  state?: any
}

const QiankunContext = createContext({})

const QiankunProvider: FC<QiankunProviderProps> = ({ children, state }) => {
  const contextValue = useMemo(() => state, [])

  return <QiankunContext.Provider value={contextValue}>{children}</QiankunContext.Provider>
}

export default QiankunProvider

export const useQiankunContext = () => useContext(QiankunContext)
