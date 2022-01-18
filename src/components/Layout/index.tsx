import React from 'react'

import { Header } from '../Header'

import { Wrapper, Content } from './styles'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <Wrapper>
    <Header />
    <Content>{children}</Content>
  </Wrapper>
)
