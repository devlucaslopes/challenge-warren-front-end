import React from 'react'
import { screen } from '@testing-library/react'

import { StatusBar } from './'
import { renderWithTheme } from '../../utils/helper/tests'

describe('<StatusBar />', () => {
  it('should render bar unfilled', () => {
    renderWithTheme(<StatusBar status="created" />)

    expect(screen.getByTestId('filled-bar')).toHaveStyle({ width: '0%' })
  })

  it('should render bar with half filled', () => {
    renderWithTheme(<StatusBar status="processing" />)

    expect(screen.getByTestId('filled-bar')).toHaveStyle({ width: '50%' })
  })

  it('should render bar with full filled', () => {
    renderWithTheme(<StatusBar status="processed" />)

    expect(screen.getByTestId('filled-bar')).toHaveStyle({ width: '100%' })
  })
})
