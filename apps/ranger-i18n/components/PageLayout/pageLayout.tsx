import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Button, Layout, Menu, Watermark } from 'antd'
import { AiOutlineMenuFold, AiOutlineMenuUnfold, AiOutlineUser } from 'react-icons/ai'
import { useQiankunContext } from '@ranger-theme/qiankun'

import { qiankunActions } from '@/actions'
import Header from '@/components/Header'
import { StyledMain, StyledLogo } from './styled'

const PageLayout = () => {
  const devModule: boolean = import.meta.env.REACT_APP_DEV_MODULE
  const context = useQiankunContext()
  const [collapsed, setCollapsed] = useState<boolean>(false)
  console.info(context)

  useEffect(() => {
    qiankunActions.onGlobalStateChange((state: any, preveState: any) => {
      console.info('微应用观察者: state改变前的值为 ', preveState)
      console.info('微应用观察者: state改变后的值为 ', state)
      setCollapsed(state.collapsed)
    })
  }, [])

  return (
    <Watermark content="QMS微应用" rotate={-22} gap={[100, 100]} zIndex={30}>
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
              defaultSelectedKeys={['/setting/qualityPlan']}
              items={[
                {
                  key: '/setting/qualityPlan',
                  icon: <AiOutlineUser />,
                  label: (
                    <Link to="/setting/qualityPlan">
                      <span>Quality Plan</span>
                    </Link>
                  )
                },
                {
                  key: '/setting/checktools',
                  icon: <AiOutlineUser />,
                  label: (
                    <Link to="/setting/checktools">
                      <span>Check Tools</span>
                    </Link>
                  )
                },
                {
                  key: '/setting/samplePrograme',
                  icon: <AiOutlineUser />,
                  label: (
                    <Link to="/setting/samplePrograme">
                      <span>Sample Programe</span>
                    </Link>
                  )
                },
                {
                  key: '/setting/complaint',
                  icon: <AiOutlineUser />,
                  label: <span>Feedback Handle</span>,
                  children: [
                    {
                      key: '/setting/complaint/records',
                      icon: <AiOutlineUser />,
                      label: (
                        <Link to="/setting/complaint/records">
                          <span>Records</span>
                        </Link>
                      )
                    },
                    {
                      key: '/setting/complaint/handles',
                      icon: <AiOutlineUser />,
                      label: (
                        <Link to="/setting/complaint/handles">
                          <span>Handles</span>
                        </Link>
                      )
                    }
                  ]
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
    </Watermark>
  )
}

export default PageLayout
