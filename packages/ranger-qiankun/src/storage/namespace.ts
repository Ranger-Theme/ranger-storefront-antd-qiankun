export class NamespacedLocalStorage {
  private key: string = ''

  private localStorage: any = null

  constructor(localStorage: any, key: string) {
    this.localStorage = localStorage
    this.key = key
  }

  _makeKey(key: string) {
    return `${this.key}__${key}`
  }

  getItem(name: string) {
    return this.localStorage.getItem(this._makeKey(name))
  }

  setItem(name: string, value: any) {
    return this.localStorage.setItem(this._makeKey(name), value)
  }

  removeItem(name: string) {
    return this.localStorage.removeItem(this._makeKey(name))
  }
}
