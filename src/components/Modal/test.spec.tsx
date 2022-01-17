import React from 'react'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Modal } from './'
import { mockContext, renderWithTheme } from '../../utils/helper/tests'
import { ITransaction } from '../../models/Transaction'

const TRANSACTION: ITransaction = {
  id: '5f89f9f257fe42957bf6dbfd',
  title: 'Resgate',
  description: 'et labore proident aute nulla',
  status: 'created',
  statusFormatted: 'Solicitada',
  amount: 2078.66,
  amountFormatted: 'R$ 2.078,66',
  date: '2018-12-22',
  from: 'Aposentadoria',
  to: 'Conta Warren'
}

describe('<Modal />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Modal transaction={TRANSACTION} />, { modalIsOpen: true })

    expect(
      screen.getByRole('heading', { name: /resgate/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/aposentadoria/i)).toBeInTheDocument()

    expect(screen.getByText(/conta warren/i)).toBeInTheDocument()

    expect(screen.getAllByText('R$ 2.078,66')).toHaveLength(2)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  fit('should close modal if button "X" is clicked', async () => {
    renderWithTheme(<Modal transaction={TRANSACTION} />, { modalIsOpen: true })

    await waitFor(() => userEvent.click(screen.getByRole('button')))

    expect(mockContext.toggleModal).toHaveBeenCalled()
  })
})
