import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../../styles/global'
import theme from '../../styles/theme'
import {
  TransactionContext,
  TransactionContextProps
} from '../../contexts/TransactionContext'

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
  customContext = mockContext
) => {
  return render(
    <TransactionContext.Provider value={customContext}>
      <ThemeProvider theme={theme}>
        <GlobalStyles {...theme} />
        {children}
      </ThemeProvider>
    </TransactionContext.Provider>
  )
}
