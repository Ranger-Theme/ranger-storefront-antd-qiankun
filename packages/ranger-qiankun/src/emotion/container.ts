export const createContainer = (devModule: boolean, name: string) => {
  if (!devModule) return document.head

  const qiankunElement = document.querySelector(`div[data-name="${name}"]`)
  if (!qiankunElement) return document.head
  const qiankunShadowDom: any = qiankunElement?.shadowRoot
  const hasQiankun: boolean = qiankunShadowDom.querySelector('qiankun-head')

  if (!hasQiankun) {
    const head: HTMLElement = document.createElement('qiankun-head')
    qiankunShadowDom.append(head)
  }

  const targetContainer: any = qiankunShadowDom.querySelector('qiankun-head')
  return targetContainer
}
