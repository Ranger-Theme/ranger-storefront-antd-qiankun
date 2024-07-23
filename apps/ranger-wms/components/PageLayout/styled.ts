import styled from '@emotion/styled'

export const StyledMain = styled.div`
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  margin: 10px;
  padding: 20px;
  background-color: #fff;
  overflow-y: auto;
  overflow-x: hidden;
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
