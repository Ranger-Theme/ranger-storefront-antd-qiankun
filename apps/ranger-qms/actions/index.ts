function emptyAction(...args: any[]) {
  console.warn('Current execute action is empty!')
  console.info(args)
}

class Actions {
  actions = {
    onGlobalStateChange: emptyAction,
    setGlobalState: emptyAction
  }

  setActions(actions: { onGlobalStateChange: () => void; setGlobalState: () => void }) {
    this.actions = actions
  }

  onGlobalStateChange(...args: any[]) {
    return this.actions.onGlobalStateChange(...args)
  }

  setGlobalState(...args: any[]) {
    return this.actions.setGlobalState(...args)
  }
}

const qiankunActions = new Actions()
export { qiankunActions }
