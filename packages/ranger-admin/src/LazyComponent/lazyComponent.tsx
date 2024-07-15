import { Suspense, memo } from 'react'
import type { ReactNode } from 'react'

type LazyComponentType = {
  element: ReactNode
}

// Solve the router change lazy component flicker issues
const LazyComponent = ({ element }: LazyComponentType): ReactNode => {
  return <Suspense>{element}</Suspense>
}

export default memo(LazyComponent)
