import React from 'react'

import { Header } from './'
import { renderWithTheme } from '../../utils/helper/tests'

describe('<Header />', () => {
  it('should render header correctly', () => {
    const { container } = renderWithTheme(<Header />)

    expect(container).toMatchSnapshot()
  })
})
