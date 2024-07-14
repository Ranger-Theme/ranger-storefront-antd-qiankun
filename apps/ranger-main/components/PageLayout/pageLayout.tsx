import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Button, Layout } from 'antd'
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai'

import { initialState, qiankunActions } from '@/actions'
import Header from '@/components/Header'
import { StyledMain, StyledLogo } from './styled'

const PageLayout = () => {
  const [collapsed, setCollapsed] = useState<boolean>(initialState.collapsed)

  const handleOnClick = () => {
    qiankunActions.setGlobalState({ collapsed: !collapsed })
  }

  useEffect(() => {
    qiankunActions.onGlobalStateChange((state, prevState) => {
      console.info('主应用观察者: state改变前的值为 ', prevState)
      console.info('主应用观察者: state改变后的值为 ', state)
      setCollapsed(state.collapsed)
    })

    return () => {
      qiankunActions.offGlobalStateChange()
    }
  }, [])

  return (
    <Layout>
      <Layout.Header style={{ padding: 0, background: '#fff' }}>
        <Header>
          <StyledLogo collapsed={collapsed}>
            <Link to="/">
              <span className="logo" />
              <span>Qiankun</span>
            </Link>
          </StyledLogo>
          <Button
            type="text"
            icon={collapsed ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
            onClick={handleOnClick}
            style={{
              width: 64,
              height: 64
            }}
          />
        </Header>
      </Layout.Header>
      <StyledMain>
        <Outlet />
      </StyledMain>
    </Layout>
  )
}

export default PageLayout
