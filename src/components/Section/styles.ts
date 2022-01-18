import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;

    ${media.lessThan('huge')`
      padding: 0 ${theme.spacings.xsmall};
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`
