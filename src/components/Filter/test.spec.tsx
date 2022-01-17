import React from 'react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Filter } from './'
import { renderWithTheme, mockContext } from '../../utils/helper/tests'

describe('<Filter />', () => {
  it('should render form', () => {
    renderWithTheme(<Filter />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getAllByRole('option')).toHaveLength(4)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should calls handleFilter() with correct params', () => {
    renderWithTheme(<Filter />)

    userEvent.type(screen.getByRole('textbox'), 'teste')
    userEvent.selectOptions(screen.getByRole('combobox'), ['created'])
    userEvent.click(screen.getByRole('button'))

    expect(mockContext.handleFilter).toHaveBeenCalledWith({
      term: 'teste',
      status: 'created'
    })
  })
})
