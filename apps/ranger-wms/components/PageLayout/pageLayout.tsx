import { useEffect, useState, lazy } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Button, Layout, Menu, Watermark } from 'antd'
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai'
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
      key: '/base',
      title: '基础数据',
      label: <span>基础数据</span>,
      children: [
        {
          key: '/base/location',
          title: '库存信息',
          label: (
            <Link to="/base/location">
              <span>库存信息</span>
            </Link>
          )
        },
        {
          key: '/stock/local',
          title: '库存列表',
          label: (
            <Link to="/stock/local">
              <span>库存列表</span>
            </Link>
          )
        },
        {
          key: '/stock/inven',
          title: '库存清单',
          label: (
            <Link to="/stock/inven">
              <span>库存清单</span>
            </Link>
          )
        }
      ]
    },
    {
      key: '/purchase',
      label: <span>收料管理</span>,
      children: [
        {
          key: '/purchase/receive',
          label: (
            <Link to="/purchase/receive">
              <span>仓库收料</span>
            </Link>
          )
        },
        {
          key: '/purchase/reclist',
          label: (
            <Link to="/purchase/reclist">
              <span>收料列表</span>
            </Link>
          )
        },
        {
          key: '/purchase/abreclist',
          label: (
            <Link to="/purchase/abreclist">
              <span>收录异常单</span>
            </Link>
          )
        }
      ]
    },
    {
      key: '/purchase-manage',
      label: <span>入库管理</span>,
      children: [
        {
          key: '/purchase/instock',
          label: (
            <Link to="/purchase/instock">
              <span>入库列表</span>
            </Link>
          )
        }
      ]
    },
    {
      key: '/purchase/complaint',
      label: <span>出库管理</span>,
      children: [
        {
          key: '/purchase/complaint/records',
          label: (
            <Link to="/purchase/complaint/records">
              <span>待发货列表</span>
            </Link>
          )
        },
        {
          key: '/purchase/complaint/date',
          label: (
            <Link to="/purchase/complaint/date">
              <span>出库日期明细</span>
            </Link>
          )
        },
        {
          key: '/purchase/complaint/handles',
          label: (
            <Link to="/purchase/complaint/handles">
              <span>任务列表</span>
            </Link>
          )
        },
        {
          key: '/purchase/complaint/list',
          label: (
            <Link to="/purchase/complaint/list">
              <span>退货列表</span>
            </Link>
          )
        }
      ]
    },
    {
      key: '/property',
      label: <span>物权管理</span>,
      children: [
        {
          key: '/property/list',
          label: (
            <Link to="/property/list">
              <span>物权列表</span>
            </Link>
          )
        }
      ]
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

  const handleOnClick = ({ item, key }: any) => {
    const base: string = '/oim/wms'
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
    <Watermark content="wms微应用" rotate={-22} gap={[100, 100]} zIndex={30}>
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
