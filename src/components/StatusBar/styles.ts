import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0;
  `}
`

export const Bar = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.spacings.medium};
    background-color: ${theme.colors['gray-light']};

    ${media.lessThan('large')`
      height: ${theme.spacings.small};
    `}
  `}
`

type FilledBarProps = {
  percentageFilled: number
}

export const FilledBar = styled.div<FilledBarProps>`
  ${({ theme, percentageFilled }) => css`
    width: ${percentageFilled}%;
    height: ${theme.spacings.medium};
    background-color: ${theme.colors.primary};
    display: flex;
    position: relative;

    &:after {
      content: '';
      width: ${theme.spacings.large};
      height: ${theme.spacings.large};
      position: absolute;
      background-color: ${theme.colors.gray};
      border-radius: 50%;
      right: -2rem;
      top: -0.5rem;
    }

    ${media.lessThan('large')`
      height: ${theme.spacings.small};

      &:after {
        width: ${theme.spacings.medium};
        height: ${theme.spacings.medium};
      }
    `}
  `}
`

export const Checkpoints = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    margin-top: ${theme.spacings.xsmall};

    span {
      font-size: ${theme.font.sizes.large};
    }

    ${media.lessThan('large')`
      span {
        font-size: ${theme.font.sizes.medium};
      }
    `}
  `}
`
