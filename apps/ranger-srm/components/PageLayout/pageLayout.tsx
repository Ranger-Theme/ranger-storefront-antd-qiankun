import { useEffect, useState, lazy } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Button, Layout, Menu, Watermark } from 'antd'
import { AiOutlineMenuFold, AiOutlineMenuUnfold, AiOutlineUser } from 'react-icons/ai'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import { BrowserPersistence } from '@ranger-theme/qiankun'
import type { MenuProps } from 'antd'

import { qiankunActions } from '@/actions'
import TabMenus from '@/components/TabMenus'
import { StyledMain, StyledLogo } from './styled'

const Header = lazy(() => import('@/components/Header'))

const PageLayout = () => {
  const devModule: boolean = import.meta.env.REACT_APP_DEV_MODULE
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const hideHeader = devModule && qiankunWindow.__POWERED_BY_QIANKUN__
  const storage = new BrowserPersistence()

  const sideMenu: MenuProps['items'] = [
    {
      key: '/setting/qualityPlan',
      icon: <AiOutlineUser />,
      title: 'Quality Plan',
      label: (
        <Link to="/setting/qualityPlan">
          <span>Quality Plan</span>
        </Link>
      )
    },
    {
      key: '/setting/checktools',
      icon: <AiOutlineUser />,
      title: 'Check Tools',
      label: (
        <Link to="/setting/checktools">
          <span>Check Tools</span>
        </Link>
      )
    },
    {
      key: '/setting/samplePrograme',
      icon: <AiOutlineUser />,
      title: 'Sample Programe',
      label: (
        <Link to="/setting/samplePrograme">
          <span>Sample Programe</span>
        </Link>
      )
    },
    {
      key: '/setting/complaint',
      icon: <AiOutlineUser />,
      title: 'Feedback Handle',
      label: <span>Feedback Handle</span>,
      children: [
        {
          key: '/setting/complaint/records',
          icon: <AiOutlineUser />,
          title: 'Records',
          label: (
            <Link to="/setting/complaint/records">
              <span>Records</span>
            </Link>
          )
        },
        {
          key: '/setting/complaint/handles',
          icon: <AiOutlineUser />,
          title: 'Handles',
          label: (
            <Link to="/setting/complaint/handles">
              <span>Handles</span>
            </Link>
          )
        }
      ]
    }
  ]

  const handleOnClick = ({ item, key }: any) => {
    const base: string = '/oim/srm'
    const value: any = { title: item.props.title, path: `${base}${key}` }
    const values = storage.getItem('qiankunStorage') || []
    const paths = values.map((params: any) => params.path)

    if (!paths.includes(value.path)) {
      values.push(value)
      storage.setItem('qiankunStorage', values, 86400 * 1000)
    }
  }

  useEffect(() => {
    if (qiankunWindow.__POWERED_BY_QIANKUN__) {
      qiankunActions.onGlobalStateChange((state: any, preveState: any) => {
        console.info('微应用观察者: state改变前的值为 ', preveState)
        console.info('微应用观察者: state改变后的值为 ', state)
        setCollapsed(state.collapsed)
      })
    }
  }, [])

  return (
    <Watermark content="srm微应用" rotate={-22} gap={[100, 100]} zIndex={30}>
      <Layout>
        {!hideHeader && (
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
              defaultSelectedKeys={['/setting/qualityPlan']}
              items={sideMenu}
              onClick={handleOnClick}
            />
          </Layout.Sider>
          <Layout>
            <TabMenus />
            <Layout.Content
              style={{
                margin: 0,
                padding: 0,
                minHeight: 'calc(100% - 64px - 38px)',
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
    </Watermark>
  )
}

export default PageLayout
