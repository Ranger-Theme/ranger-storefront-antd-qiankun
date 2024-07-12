import styled from '@emotion/styled'

export const StyledHeader = styled.header`
  display: flex;
  padding: 12px 24px;
  justify-content: space-between;
  align-items: center;
  background-color: #30b8bd;
`

export const StyledNavigation = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 20px;
  justify-content: flex-start;
  align-content: center;
`

export const StyledLogo = styled.div`
  width: 225px;
`

export const StyledMenus = styled.ul`
  display: grid;
  margin-bottom: 0;
  grid-auto-flow: column;
  grid-column-gap: 30px;
  justify-content: flex-start;
  align-content: center;

  > li {
    list-style-type: none;

    > a {
      color: #fff;
      text-decoration: none;

      &:hover {
        color: orange;
      }
    }
  }
`
