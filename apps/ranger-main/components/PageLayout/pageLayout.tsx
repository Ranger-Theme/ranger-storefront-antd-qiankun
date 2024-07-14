import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Button, Layout } from 'antd'
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai'

import Header from '@/components/Header'
import { StyledMain, StyledLogo } from './styled'

const PageLayout = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

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
            onClick={() => setCollapsed(!collapsed)}
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
