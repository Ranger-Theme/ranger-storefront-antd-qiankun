import { Button, Dropdown, Space } from 'antd'
import { AiOutlineDown } from 'react-icons/ai'
import { MdGTranslate } from 'react-icons/md'
import { IoMdTime } from 'react-icons/io'
import { TimeDown } from '@ranger-theme/admin'
import type { FC, PropsWithChildren } from 'react'
import type { MenuProps } from 'antd'

import { useHeader } from '@/hooks/Header'
import Navigation from '@/components/Navigation'
import { StyledHeader, StyledNavigation, StyledTools, StyledDate } from './styled'

const Header: FC<PropsWithChildren> = ({ children }) => {
  const { handleLogout } = useHeader()

  const items: MenuProps['items'] = [
    {
      key: 'change_password',
      label: <span>Change Password</span>
    },
    {
      key: 'logout',
      label: (
        <span aria-hidden onClick={handleLogout}>
          Logout
        </span>
      )
    }
  ]

  return (
    <StyledHeader>
      <StyledNavigation>
        {children}
        <Navigation />
      </StyledNavigation>
      <StyledTools>
        <StyledDate>
          <IoMdTime size={22} />
          <TimeDown />
        </StyledDate>
        <Button type="text">
          <MdGTranslate size={22} />
          <span>EN</span>
        </Button>
        <Dropdown menu={{ items }} trigger={['click']}>
          <Space>
            <span className="label">Admin</span>
            <AiOutlineDown />
          </Space>
        </Dropdown>
      </StyledTools>
    </StyledHeader>
  )
}

export default Header
