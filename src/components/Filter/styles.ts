import styled, { css } from 'styled-components'

export const Form = styled.form`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
    display: flex;
    gap: ${theme.grid.gutter};

    input {
      width: 40rem;
      height: ${theme.spacings.medium};
    }
  `}
`
