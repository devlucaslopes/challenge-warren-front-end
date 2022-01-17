import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../../styles/global'
import theme from '../../styles/theme'
import {
  HandleFilterProps,
  TransactionContext,
  TransactionContextProps
} from '../../contexts/TransactionContext'
import { ITransaction } from '../../models/Transaction'

type CustomContextProps = {
  transactions?: ITransaction[]
  filteredTransactions?: ITransaction[]
  modalIsOpen?: boolean
  handleFilter?: (data: HandleFilterProps) => void
  toggleModal?: () => void
  findTransactionById?: (id: string) => ITransaction | undefined
}

export const mockContext: TransactionContextProps = {
  transactions: [],
  filteredTransactions: [],
  modalIsOpen: false,
  toggleModal: jest.fn(),
  findTransactionById: jest.fn(),
  handleFilter: jest.fn()
}

export const renderWithTheme = (
  children: React.ReactNode,
  customContext: CustomContextProps
) => {
  return render(
    <TransactionContext.Provider value={{ ...mockContext, ...customContext }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles {...theme} />
        {children}
      </ThemeProvider>
    </TransactionContext.Provider>
  )
}
