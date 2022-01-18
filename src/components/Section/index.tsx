import React from 'react'

import { Wrapper, Title } from './styles'

type SectionProps = {
  children: React.ReactNode
  title?: string
}

export const Section = ({ children, title }: SectionProps) => (
  <Wrapper>
    {title && <Title>{title}</Title>}
    {children}
  </Wrapper>
)
