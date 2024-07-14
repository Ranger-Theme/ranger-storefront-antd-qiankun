import { initGlobalState } from '@ranger-theme/qiankun'
import type { MicroAppStateActions } from '@ranger-theme/qiankun'

type InitialState = {
  collapsed: boolean
  isLogin: boolean
}

const initialState: InitialState = { collapsed: false, isLogin: true }
const qiankunActions: MicroAppStateActions = initGlobalState(initialState)

export { initialState, qiankunActions }
