import React from 'react'

import { Header } from '../Header'

import * as S from './styles'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <S.Layout>
    <Header />
    <S.Wrapper>{children}</S.Wrapper>
  </S.Layout>
)
