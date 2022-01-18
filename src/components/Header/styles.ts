import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding: ${theme.spacings.xsmall} 0;

    ${media.lessThan('huge')`
      padding: ${theme.spacings.xsmall};
    `}
  `}
`

export const Content = styled.div`
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
