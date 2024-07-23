import type { Theme as EmotionTheme } from '@emotion/react'

declare module '@emotion/react' {
  export interface Theme extends EmotionTheme {
    colors: {
      white: string
      black: string
      primary: string
    }
    namespace: string
  }
}
