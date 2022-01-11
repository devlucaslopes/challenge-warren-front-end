import styled, { css } from 'styled-components'

type WrapperProps = {
  isVisible: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isVisible }) => css`
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.7);
    display: ${isVisible ? 'flex' : 'none'};
    align-items: center;
    z-index: ${theme.layers.modal};
  `}
`

export const Dialog = styled.dialog`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 0 auto;
    padding: ${theme.spacings.medium};
    position: relative;
  `}
`

export const Title = styled.h2``

export const Content = styled.div``

export const CloseButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    right: 3.2rem;
    padding: 0.8rem;
    background: none;
    border: none;
    color: ${theme.colors['gray-medium']};
  `}
`
