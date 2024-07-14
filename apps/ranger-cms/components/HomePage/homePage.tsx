import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Button, Layout, Menu } from 'antd'
import { AiOutlineMenuFold, AiOutlineMenuUnfold, AiOutlineUser } from 'react-icons/ai'

import Header from '@/components/Header'
import { StyledMain, StyledLogo } from './styled'

const HomePage = () => {
  const devModule: boolean = import.meta.env.REACT_APP_DEV_MODULE
  const [collapsed, setCollapsed] = useState<boolean>(false)

  return (
    <Layout>
      {!devModule && (
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
      )}
      <Layout>
        <Layout.Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={245}
          style={{
            overflow: 'auto',
            height: 'calc(100vh - 64px)'
          }}
        >
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <AiOutlineUser />,
                label: 'nav 1'
              },
              {
                key: '2',
                icon: <AiOutlineUser />,
                label: 'nav 2'
              },
              {
                key: '3',
                icon: <AiOutlineUser />,
                label: 'nav 3'
              }
            ]}
          />
        </Layout.Sider>
        <Layout>
          <Layout.Content
            style={{
              margin: 0,
              padding: 0,
              minHeight: 'calc(100% - 64px)',
              overflow: 'auto'
            }}
          >
            <StyledMain>
              <Outlet />
            </StyledMain>
          </Layout.Content>
          <Layout.Footer style={{ textAlign: 'center', background: '#fff' }}>
            Qiankun ©{new Date().getFullYear()} Created by Qiankun Micro Frontend
          </Layout.Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default HomePage
