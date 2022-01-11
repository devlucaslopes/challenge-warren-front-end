import styled, { css } from 'styled-components'

export const Section = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`
