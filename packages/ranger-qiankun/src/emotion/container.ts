export const createContainer = (devModule: boolean, name: string) => {
  if (!devModule) return document.head
  const qiankunShadowDom: any = document.querySelector(`div[data-name="${name}"]`)?.shadowRoot
  const hasQiankun: boolean = qiankunShadowDom.querySelector('qiankun-head')

  if (!hasQiankun) {
    const head: HTMLElement = document.createElement('qiankun-head')
    qiankunShadowDom.append(head)
  }

  const targetContainer: any = qiankunShadowDom.querySelector('qiankun-head')
  return targetContainer
}
