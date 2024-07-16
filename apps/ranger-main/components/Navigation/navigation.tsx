import { useEffect, useState } from 'react'

import MenuItem from './MenuItem'
import { StyledMenus } from './styled'

interface MenuItem {
  key: string
  label: string
  url?: string
  children?: MenuItem[]
}

const Navigation = () => {
  const [activeKey, setActiveKey] = useState<string>('')

  const menuList: Array<MenuItem> = [
    {
      key: '/oms',
      label: 'OMS',
      children: [
        {
          key: '/oms/order',
          label: '订单中心'
        },
        {
          key: '/oms/logistics',
          label: '物流中心'
        },
        {
          key: '/oms/stock',
          label: '库存中心'
        },
        {
          key: '/oms/products',
          label: '商品中心'
        }
      ]
    },
    {
      key: 'oim',
      label: 'OIM',
      children: [
        {
          key: '/oim/srm',
          label: 'SRM'
        },
        {
          key: '/oim/qms',
          label: 'QMS'
        },
        {
          key: '/oim/wms',
          label: 'WMS'
        },
        {
          key: '/oim/mes',
          label: 'MES'
        }
      ]
    },
    {
      key: '/ops',
      label: 'OPS',
      children: [
        {
          key: '/ops/sys',
          label: '奋斗系统'
        },
        {
          key: '/ops/combat',
          label: '战功系统'
        },
        {
          key: '/ops/taxi',
          label: '打车系统'
        }
      ]
    },
    {
      key: '/obw',
      label: 'OBW',
      children: [
        {
          key: '/obw/website',
          label: '官网'
        },
        {
          key: '/obw/admin',
          label: '官网后台'
        },
        {
          key: '/obw/shop',
          label: '商城'
        },
        {
          key: '/obw/shop-admin',
          label: '商城后台'
        }
      ]
    }
  ]

  const handleOnSetKey = (key: string) => {
    setActiveKey(key)
  }

  useEffect(() => {
    const handleOnKeyup = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.keyCode === 27) {
        setActiveKey('')
      }
    }

    document.addEventListener('keyup', handleOnKeyup, false)
    return () => {
      document.removeEventListener('keyup', handleOnKeyup, false)
    }
  }, [])

  return (
    <StyledMenus>
      {menuList.map((menu) => {
        const { key } = menu
        return <MenuItem key={key} menu={menu} activeKey={activeKey} onSetKey={handleOnSetKey} />
      })}
    </StyledMenus>
  )
}

export default Navigation
