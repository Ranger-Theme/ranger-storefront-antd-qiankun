import { Link } from 'react-router-dom'
import { AiOutlineDown } from 'react-icons/ai'
import { Space } from 'antd'

import {
  StyledMenuItem,
  StyledLayer,
  StyledMenuBar,
  StyledMenuLabel,
  StyledMenuLink
} from './styled'

const MenuItem = ({ activeKey, menu, onSetKey }: any) => {
  const { key, label, children } = menu

  const handleOnToggle = () => {
    onSetKey(key)
  }

  const handleOnClose = () => {
    onSetKey('')
  }

  return (
    <StyledMenuItem>
      <div className="item" aria-hidden onClick={handleOnToggle}>
        <span dangerouslySetInnerHTML={{ __html: label }} />
        <AiOutlineDown />
      </div>
      {(children || []).length > 0 && (
        <StyledLayer collapsed={activeKey === key}>
          <StyledMenuBar>
            <StyledMenuLabel>
              <span dangerouslySetInnerHTML={{ __html: label }} />
            </StyledMenuLabel>
            <Space size={40}>
              {children?.map((item: any) => {
                return (
                  <StyledMenuLink key={item.key}>
                    <Link to={item.key} onClick={handleOnClose}>
                      <span dangerouslySetInnerHTML={{ __html: item.label }} />
                    </Link>
                  </StyledMenuLink>
                )
              })}
            </Space>
          </StyledMenuBar>
          <div style={{ height: '100%' }} aria-hidden onClick={handleOnClose} />
        </StyledLayer>
      )}
    </StyledMenuItem>
  )
}

export default MenuItem
