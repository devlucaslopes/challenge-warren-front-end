import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xsmall};

    input,
    select {
      height: ${theme.spacings.medium};
      border: 1px solid ${theme.colors['gray-medium']};
      border-radius: ${theme.border.radius};
      padding: 0 ${theme.spacings.xsmall};
      outline: none;
      color: ${theme.colors.gray};
    }

    input {
      width: 40rem;
    }

    input:focus,
    select:focus {
      border-color: ${theme.colors.primary};
    }

    button {
      padding: 0 ${theme.spacings.small};
      border-radius: ${theme.border.radius};
      border: none;
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      text-transform: uppercase;
    }

    ${media.lessThan('medium')`
      flex-direction: column;

      input {
        width: 100%;
      }

      button {
        height: ${theme.spacings.medium};
      }
    `}
  `}
`
