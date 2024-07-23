import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Tabs } from 'antd'
import { BrowserPersistence } from '@ranger-theme/qiankun'

import { StyledTabMenus } from './styled'

type TargetKey = React.MouseEvent | React.KeyboardEvent | string

const TabMenus = () => {
  const storage = new BrowserPersistence()
  const { pathname } = useLocation()
  const [activeKey, setActiveKey] = useState('')
  const [items, setItems] = useState<any[]>([])

  const add = () => {}

  const remove = (targetKey: TargetKey) => {
    const targetIndex = items.findIndex((pane) => pane.key === targetKey)
    const newPanes = items.filter((pane) => pane.key !== targetKey)

    if (newPanes.length && targetKey === activeKey) {
      const { key } = newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex]
      setActiveKey(key)
    }
    const menus: any[] = newPanes.map((panel: any) => {
      return { title: panel.label, path: panel.key }
    })
    storage.setItem('qiankunStorage', menus, 86400 * 1000)
    setItems(newPanes)
  }

  const onEdit = (targetKey: TargetKey, action: 'add' | 'remove') => {
    if (action === 'add') {
      add()
    } else {
      remove(targetKey)
    }
  }

  const onChange = (key: string) => {
    setActiveKey(key)
    window.history.pushState(null, '', key)
  }

  useEffect(() => {
    const values: any[] = storage.getItem('qiankunStorage') || []
    const base: string = '/oim/wms'
    const path: string = `${base}${pathname}`

    if (values.length > 0) {
      const panels = values.map((params: any) => {
        return { label: params.title, children: null, key: params.path }
      })
      const match = values.find((value: any) => value.path === path)
      setItems([...panels])
      setActiveKey(match?.path ?? values?.[0]?.path)
    }
  }, [pathname])

  return (
    <StyledTabMenus>
      <Tabs
        type="editable-card"
        hideAdd
        activeKey={activeKey}
        items={items}
        onChange={onChange}
        onEdit={onEdit}
      />
    </StyledTabMenus>
  )
}

export default TabMenus
