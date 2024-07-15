import { Link } from 'react-router-dom'
import { AiOutlineDown } from 'react-icons/ai'
import type { MenuProps } from 'antd'
import { Dropdown, Space } from 'antd'

import { StyledMenus } from './styled'

const Navigation = () => {
  const omsItems: MenuProps['items'] = [
    {
      key: '0',
      label: (
        <Link to="/MES/ORDER">
          <span>订单中心</span>
        </Link>
      )
    },
    {
      key: '1',
      label: (
        <Link to="/MES/ORDER">
          <span>物流中心</span>
        </Link>
      )
    },
    {
      key: '3',
      label: (
        <Link to="/MES/ORDER">
          <span>库存中心</span>
        </Link>
      )
    },
    {
      key: '4',
      label: (
        <Link to="/MES/ORDER">
          <span>商品中心</span>
        </Link>
      )
    }
  ]

  const oimItems: MenuProps['items'] = [
    {
      key: '/oim/srm',
      label: (
        <Link to="/oim/srm">
          <span>SRM</span>
        </Link>
      )
    },
    {
      key: '/oim/qms',
      label: (
        <Link to="/oim/qms">
          <span>QMS</span>
        </Link>
      )
    },
    {
      key: '/oim/wms',
      label: (
        <Link to="/oim/wms">
          <span>WMS</span>
        </Link>
      )
    },
    {
      key: '/oim/mes',
      label: (
        <Link to="/oim/mes">
          <span>MES</span>
        </Link>
      )
    }
  ]

  const opsItems: MenuProps['items'] = [
    {
      key: '0',
      label: (
        <Link to="/MES/ORDER">
          <span>奋斗系统</span>
        </Link>
      )
    },
    {
      key: '1',
      label: (
        <Link to="/MES/ORDER">
          <span>战功系统</span>
        </Link>
      )
    },
    {
      key: '3',
      label: (
        <Link to="/MES/ORDER">
          <span>点餐系统</span>
        </Link>
      )
    },
    {
      key: '4',
      label: (
        <Link to="/MES/ORDER">
          <span>打车系统</span>
        </Link>
      )
    }
  ]

  const obwItems: MenuProps['items'] = [
    {
      key: '0',
      label: (
        <Link to="/MES/ORDER">
          <span>官网</span>
        </Link>
      )
    },
    {
      key: '1',
      label: (
        <Link to="/MES/ORDER">
          <span>官网后台</span>
        </Link>
      )
    },
    {
      key: '3',
      label: (
        <Link to="/MES/ORDER">
          <span>商城</span>
        </Link>
      )
    },
    {
      key: '4',
      label: (
        <Link to="/MES/ORDER">
          <span>商城后台</span>
        </Link>
      )
    }
  ]

  return (
    <StyledMenus>
      <li>
        <Dropdown menu={{ items: omsItems }} trigger={['click']}>
          <Space>
            <span>OMS</span>
            <AiOutlineDown />
          </Space>
        </Dropdown>
      </li>
      <li>
        <Dropdown menu={{ items: oimItems }} trigger={['click']}>
          <Space>
            <span>OIM</span>
            <AiOutlineDown />
          </Space>
        </Dropdown>
      </li>
      <li>
        <Dropdown menu={{ items: opsItems }} trigger={['click']}>
          <Space>
            <span>OPS</span>
            <AiOutlineDown />
          </Space>
        </Dropdown>
      </li>
      <li>
        <Dropdown menu={{ items: obwItems }} trigger={['click']}>
          <Space>
            <span>OBW</span>
            <AiOutlineDown />
          </Space>
        </Dropdown>
      </li>
    </StyledMenus>
  )
}

export default Navigation
