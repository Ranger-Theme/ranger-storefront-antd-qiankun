import styled from '@emotion/styled'

export const StyledMain = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  background-color: #fff;
  z-index: 50;
`

export const StyledLogo = styled.div<{
  collapsed: boolean
}>`
  display: flex;
  width: ${(props) => (props.collapsed ? '0' : '245px')};
  justify-content: flex-start;
  align-items: center;
  opacity: ${(props) => (props.collapsed ? 0 : 1)};
  transition: width 0.2s;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.88);
  }

  .logo {
    display: inline-block;
    height: 40px;
    padding-left: 50px;
    background-image: url('/images/logo.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
`
