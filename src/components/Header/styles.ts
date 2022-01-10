import styled, { css } from 'styled-components'

export const Header = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding: ${theme.spacings.xsmall} 0;
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
  `}
`

export const Logo = styled.svg`
  ${({ theme }) => css`
    fill: ${theme.colors.white};
  `}
`
