import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Table = styled.table`
  ${({ theme }) => css`
    width: 100%;
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
        background-color: ${theme.colors['gray-light']};
        cursor: pointer;
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.8);
        }
      }

      tr:nth-child(even) {
        background-color: ${theme.colors['gray-medium']};
      }
    }

    ${media.lessThan('medium')`
      th,
      td {
        padding: 0.8rem;
      }
    `}

    ${media.lessThan('huge')`
      thead {
        th {
          font-size: ${theme.font.sizes.small};
        }
      }

      tbody {
        font-size: ${theme.font.sizes.small};
      }
    `}
  `}
`
