import React from 'react'
import { screen, waitFor } from '@testing-library/react'

import { Section } from './'
import { renderWithTheme } from '../../utils/helper/tests'

describe('<Section />', () => {
  it('should render correctly without title', () => {
    renderWithTheme(
      <Section>
        <p>Foo bar</p>
      </Section>
    )

    expect(screen.getByText(/foo bar/i)).toBeInTheDocument()
    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
  })

  it('should render correctly with title', () => {
    renderWithTheme(
      <Section title="Lorem Ipsum">
        <p>Foo bar</p>
      </Section>
    )

    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
