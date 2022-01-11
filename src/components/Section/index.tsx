import React from 'react'

import * as S from './styles'

type SectionProps = {
  children: React.ReactNode
  title?: string
}

export const Section = ({ children, title }: SectionProps) => (
  <S.Section>
    {title && <S.Title>{title}</S.Title>}
    {children}
  </S.Section>
)
