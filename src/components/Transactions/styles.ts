import styled, { css } from 'styled-components'

export const Table = styled.table`
  ${({ theme }) => css`
    width: 100%;
    margin-top: ${theme.spacings.medium};
    border-collapse: collapse;

    thead {
      background-color: ${theme.colors.gray};
      color: ${theme.colors.white};
      text-align: left;

      th {
        font-size: ${theme.font.sizes.large};
      }
    }

    th,
    td {
      padding: ${theme.spacings.xsmall};
      border: 1px solid ${theme.colors['gray-light']};
    }

    tbody {
      tr {
        color: ${theme.colors.gray};
      }

      tr:nth-child(even) {
        background-color: ${theme.colors['gray-medium']};
      }
    }
  `}
`
