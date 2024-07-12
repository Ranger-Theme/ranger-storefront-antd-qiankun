import styled from '@emotion/styled'

export const StyledHeader = styled.div`
  display: flex;
  padding: 0 15px;
  justify-content: space-between;
  align-items: center;
`

export const StyledNavigation = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
  align-content: center;
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
      color: rgba(0, 0, 0, 0.88);
      text-decoration: none;

      &:hover {
        color: orange;
      }
    }
  }
`

export const StyledTools = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 20px;
  justify-content: flex-end;
  align-items: center;

  .label {
    cursor: pointer;
  }
`
