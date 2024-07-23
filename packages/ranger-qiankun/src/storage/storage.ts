import { NamespacedLocalStorage } from './namespace'

const storageMock = {
  length: 0,
  getItem() {},
  setItem() {},
  removeItem() {},
  clear() {}
}

export class BrowserPersistence {
  private KEY: string = 'BROWSER_PERSISTENCE'

  private storage: any = null

  constructor(localStorage = globalThis.localStorage || storageMock) {
    this.storage = new NamespacedLocalStorage(localStorage, this.KEY)
  }

  getRawItem(name: string) {
    return this.storage.getItem(name)
  }

  getItem(name: string) {
    const now = Date.now()
    const item = this.storage.getItem(name)
    if (!item) {
      return undefined
    }
    const { value, ttl, timeStored } = JSON.parse(item)

    if (ttl && now - timeStored > ttl * 1000) {
      this.storage.removeItem(name)
      return undefined
    }

    return value
  }

  setItem(name: string, value: any, ttl: number) {
    const timeStored = Date.now()
    this.storage.setItem(
      name,
      JSON.stringify({
        value,
        timeStored,
        ttl
      })
    )
  }

  removeItem(name: string) {
    this.storage.removeItem(name)
  }
}
