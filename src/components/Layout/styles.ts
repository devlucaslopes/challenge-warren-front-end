import styled, { css } from 'styled-components'

export const Layout = styled.div``

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
  `}
`
