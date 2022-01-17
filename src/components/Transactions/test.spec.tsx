import React from 'react'
import { screen } from '@testing-library/react'

import { Transactions } from './'
import { mockContext, renderWithTheme } from '../../utils/helper/tests'
import { ITransaction } from '../../models/Transaction'
import userEvent from '@testing-library/user-event'

const TRANSACTIONS: ITransaction[] = [
  {
    id: '1',
    title: 'Resgate',
    description: 'et labore proident aute nulla',
    status: 'created',
    statusFormatted: 'Solicitada',
    amount: 2078.66,
    amountFormatted: 'R$ 2.078,66',
    date: '2018-12-22',
    from: 'Aposentadoria',
    to: 'Conta Warren'
  },
  {
    id: '2',
    title: 'Movimentação interna',
    description: 'et labore proident aute nulla',
    status: 'created',
    statusFormatted: 'Solicitada',
    amount: 4000,
    amountFormatted: 'R$ 4.000,00',
    date: '2018-12-22',
    from: 'Aposentadoria',
    to: 'Conta Warren'
  },
  {
    id: '3',
    title: 'Depósito',
    description: 'et labore proident aute nulla',
    status: 'created',
    statusFormatted: 'Solicitada',
    amount: 1000.66,
    amountFormatted: 'R$ 1.000,66',
    date: '2018-12-22',
    from: 'Aposentadoria',
    to: 'Conta Warren'
  }
]

describe('<Transactions />', () => {
  it('should render table with 3 rows', () => {
    renderWithTheme(<Transactions data={TRANSACTIONS} />)

    expect(screen.getAllByRole('button')).toHaveLength(3)
    expect(screen.getByText(TRANSACTIONS[0].title)).toBeInTheDocument()
    expect(screen.getByText(TRANSACTIONS[1].title)).toBeInTheDocument()
    expect(screen.getByText(TRANSACTIONS[2].title)).toBeInTheDocument()
  })

  it('should calls findTransactionById() and toggleModal() when button is clicked', () => {
    const findTransactionById = jest.fn(() => TRANSACTIONS[0])

    renderWithTheme(<Transactions data={TRANSACTIONS} />, {
      findTransactionById
    })

    const [firstRow] = screen.getAllByRole('button')

    userEvent.click(firstRow)

    expect(findTransactionById).toHaveBeenCalledWith(TRANSACTIONS[0].id)

    expect(mockContext.toggleModal).toHaveBeenCalled()
  })
})
