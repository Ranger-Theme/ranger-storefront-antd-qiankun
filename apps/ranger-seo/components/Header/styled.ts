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

export const StyledDate = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 5px;
  justify-content: center;
  align-items: center;
`
