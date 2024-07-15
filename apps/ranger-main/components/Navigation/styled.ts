import styled from '@emotion/styled'

export const StyledMenus = styled.ul`
  display: grid;
  margin-bottom: 0;
  grid-auto-flow: column;
  grid-column-gap: 30px;
  justify-content: flex-start;
  align-content: center;

  > li {
    color: #fff;
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
