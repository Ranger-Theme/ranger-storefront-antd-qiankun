import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Button, Layout, Menu, Watermark } from 'antd'
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai'
import { useQiankunContext } from '@ranger-theme/qiankun'
import type { MenuProps } from 'antd'

import { qiankunActions } from '@/actions'
import Header from '@/components/Header'
import { StyledMain, StyledLogo } from './styled'

const PageLayout = () => {
  const devModule: boolean = import.meta.env.REACT_APP_DEV_MODULE
  const context = useQiankunContext()
  const [collapsed, setCollapsed] = useState<boolean>(false)
  console.info(context)

  const sideMenu: MenuProps['items'] = [
    {
      key: '/setting/qualityPlan',
      label: <span>基础数据</span>,
      children: [
        {
          key: '/setting/checktools/info',
          label: (
            <Link to="/setting/checktools/info">
              <span>库存信息</span>
            </Link>
          )
        },
        {
          key: '/setting/checktools/list',
          label: (
            <Link to="/setting/checktools/list">
              <span>库存列表</span>
            </Link>
          )
        },
        {
          key: '/setting/checktools/order',
          label: (
            <Link to="/setting/checktools/order">
              <span>库存清单</span>
            </Link>
          )
        }
      ]
    },
    {
      key: '/setting/checktools/1',
      label: <span>收料管理</span>,
      children: [
        {
          key: '/setting/checktools/11',
          label: (
            <Link to="/setting/checktools/11">
              <span>仓库收料</span>
            </Link>
          )
        },
        {
          key: '/setting/checktools/12',
          label: (
            <Link to="/setting/checktools/12">
              <span>收料列表</span>
            </Link>
          )
        },
        {
          key: '/setting/checktools/13',
          label: (
            <Link to="/setting/checktools/13">
              <span>收录异常单</span>
            </Link>
          )
        }
      ]
    },
    {
      key: '/setting/samplePrograme',
      label: (
        <Link to="/setting/samplePrograme">
          <span>入口管理</span>
        </Link>
      )
    },
    {
      key: '/setting/complaint',
      label: <span>出库管理</span>,
      children: [
        {
          key: '/setting/complaint/records',
          label: (
            <Link to="/setting/complaint/records">
              <span>Records</span>
            </Link>
          )
        },
        {
          key: '/setting/complaint/handles',
          label: (
            <Link to="/setting/complaint/handles">
              <span>Handles</span>
            </Link>
          )
        }
      ]
    },
    {
      key: '/setting/property',
      label: (
        <Link to="/setting/property">
          <span>物权管理</span>
        </Link>
      )
    },
    {
      key: '/setting/board',
      label: <span>看板管理</span>,
      children: [
        {
          key: '/setting/board/equip',
          label: (
            <Link to="/setting/board/equip">
              <span>备料看板</span>
            </Link>
          )
        },
        {
          key: '/setting/board/stockwarn',
          label: (
            <Link to="/setting/board/stockwarn">
              <span>库存预警</span>
            </Link>
          )
        }
      ]
    }
  ]

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
              items={sideMenu}
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
