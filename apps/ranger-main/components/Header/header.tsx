import { Link } from 'react-router-dom'

import { StyledHeader, StyledNavigation, StyledLogo, StyledMenus } from './styled'

const Header = () => {
  return (
    <StyledHeader>
      <StyledNavigation>
        <StyledLogo>
          <Link to="/">
            <img src="/images/logo.png" width={96} height={25} alt="" />
          </Link>
        </StyledLogo>
        <StyledMenus>
          <li>
            <Link to="/MES/VMI">
              <span>QIM - MES</span>
            </Link>
          </li>
          <li>
            <Link to="/MES/QMS">
              <span>QIM - QMS</span>
            </Link>
          </li>
        </StyledMenus>
      </StyledNavigation>
    </StyledHeader>
  )
}

export default Header
