import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import MockAdapter from 'axios-mock-adapter'
import userEvent from '@testing-library/user-event'

import { api } from './services/api'

import App from './App'

const DATA = [
  {
    id: '5f89f9f257fe42957bf6dbfd',
    title: 'Resgate',
    description: 'et labore proident aute nulla',
    status: 'created',
    amount: 2078.66,
    date: '2018-12-22',
    from: 'Aposentadoria',
    to: 'Conta Warren'
  },
  {
    id: '5f89f9f271e4213092bd4e41',
    title: 'Depósito',
    description: 'excepteur veniam proident irure pariatur',
    status: 'created',
    amount: 148856.29,
    date: '2017-07-23',
    from: 'Trade',
    to: 'Conta Warren'
  },
  {
    id: '5f89f9f2f318e70ff298f528',
    title: 'Movimentação interna',
    description: 'eu officia laborum labore aute',
    status: 'processed',
    amount: 25092.8,
    date: '2016-08-25',
    from: 'Férias',
    to: 'Trade'
  }
]

const mockApi = new MockAdapter(api)

describe('<App />', () => {
  beforeEach(() => mockApi.onGet('').reply(200, DATA))

  afterEach(() => mockApi.reset())

  it('should render correctly', async () => {
    await waitFor(() => render(<App />))

    expect(screen.getAllByTestId(/transaction-row*/)).toHaveLength(3)
  })

  it('should toggle dialog when row and button "X" is clicked', async () => {
    await waitFor(() => render(<App />))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    const [, firstRow] = screen.getAllByRole('button')

    userEvent.click(firstRow)

    expect(screen.getByRole('dialog')).toBeInTheDocument()

    userEvent.click(screen.getByRole('button', { name: /close dialog/i }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('should filter transactions by title', async () => {
    await waitFor(() => render(<App />))

    expect(screen.getAllByTestId(/transaction-row*/)).toHaveLength(3)

    userEvent.type(screen.getByRole('textbox'), 'Resgate')
    userEvent.click(screen.getByRole('button', { name: /filtrar/i }))

    expect(screen.getAllByTestId(/transaction-row*/)).toHaveLength(1)
  })

  it('should reset transactions when title is cleared', async () => {
    await waitFor(() => render(<App />))

    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button', { name: /filtrar/i })

    userEvent.type(input, 'Resgate')
    userEvent.click(button)

    expect(screen.getAllByTestId(/transaction-row*/)).toHaveLength(1)

    userEvent.clear(input)
    userEvent.click(button)

    expect(screen.getAllByTestId(/transaction-row*/)).toHaveLength(3)
  })

  it('should filter transactions by status', async () => {
    await waitFor(() => render(<App />))

    userEvent.selectOptions(screen.getByRole('combobox'), ['processed'])
    userEvent.click(screen.getByRole('button', { name: /filtrar/i }))

    expect(screen.getAllByTestId(/transaction-row*/)).toHaveLength(1)
  })

  it('should filter transactions by title and status', async () => {
    await waitFor(() => render(<App />))

    userEvent.type(screen.getByRole('textbox'), 'Movimentação interna')
    userEvent.selectOptions(screen.getByRole('combobox'), ['processed'])
    userEvent.click(screen.getByRole('button', { name: /filtrar/i }))

    expect(screen.getAllByTestId(/transaction-row*/)).toHaveLength(1)
  })
})
