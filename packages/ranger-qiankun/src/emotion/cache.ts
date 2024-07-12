import createEmotionCache from '@emotion/cache'
import type { EmotionCache, Options } from '@emotion/cache'

export const createCache = (devModule: boolean, container: any) => {
  const cacheOptions: Options = {
    key: 'css',
    prepend: false,
    speedy: false,
    stylisPlugins: []
  }

  if (devModule) cacheOptions.container = container
  const cache: EmotionCache = createEmotionCache(cacheOptions)

  return cache
}
