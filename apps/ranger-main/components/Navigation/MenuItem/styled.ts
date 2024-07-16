import styled from '@emotion/styled'

export const StyledMenuItem = styled.div`
  .item {
    display: grid;
    color: #fff;
    cursor: pointer;
    grid-auto-flow: column;
    grid-column-gap: 5px;
    justify-content: center;
    align-items: center;
  }
`

export const StyledLayer = styled.div<{
  collapsed: boolean
}>`
  position: fixed;
  top: 64px;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.collapsed ? 'block' : 'none')};
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
  transition: all 0.3s ease-in-out;
`

export const StyledMenuBar = styled.div`
  display: grid;
  grid-template-columns: 245px 1fr;
  background: rgb(248, 251, 255);
  box-shadow: rgba(0, 0, 0, 0.03) 2px 2px 10px 0px;
  min-height: 90px;
`

export const StyledMenuLabel = styled.div`
  display: flex;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: 900;
  color: rgb(255, 108, 1);
  justify-content: flex-start;
  align-items: center;
`

export const StyledMenuLink = styled.div`
  a {
    color: rgba(0, 0, 0, 0.88);

    &:hover {
      color: rgb(255, 108, 1);
    }
  }
`
