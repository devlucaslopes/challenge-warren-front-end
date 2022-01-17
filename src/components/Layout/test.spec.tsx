import React from 'react'
import { screen } from '@testing-library/react'

import { Layout } from './'
import { renderWithTheme } from '../../utils/helper/tests'

describe('<Layout />', () => {
  it('should render correctly without title', () => {
    renderWithTheme(
      <Layout>
        <p>Foo bar</p>
      </Layout>
    )

    expect(screen.getByTestId('header')).toBeInTheDocument()

    expect(screen.getByText(/foo bar/i)).toBeInTheDocument()
  })
})
