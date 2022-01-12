import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

import { ITransaction } from '../models/Transaction'
import { api } from '../services/api'
import STATUS from '../utils/status'

type HandleFilterProps = {
  term: string
  status: string
}

type TransactionProviderProps = {
  children: ReactNode
}

type TransactionContextProps = {
  transactions: ITransaction[]
  filteredTransactions: ITransaction[]
  handleFilter: (data: HandleFilterProps) => void
}

export const TransactionContext = createContext({} as TransactionContextProps)

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])
  const [filteredTransactions, setFilteredTransactions] = useState<
    ITransaction[]
  >([])

  useEffect(() => {
    api.get<ITransaction[]>('/').then(({ data }) => {
      const formatted = data.map((transaction) => {
        const [{ label }] = STATUS.filter(
          ({ value }) => value === transaction.status
        )

        return {
          ...transaction,
          statusFormatted: label
        }
      })

      setTransactions(formatted)
      setFilteredTransactions(formatted)
    })
  }, [])

  const handleFilter = ({
    term,
    status: statusSelected
  }: HandleFilterProps) => {
    if (term === '' && statusSelected === '') {
      setFilteredTransactions(transactions)
      return
    }

    const filtered = transactions.filter(({ title, status }) => {
      if (term && statusSelected) {
        return (
          title.toLowerCase().includes(term.toLowerCase()) &&
          status === statusSelected
        )
      } else if (!term && statusSelected) {
        return status === statusSelected
      } else {
        return title.toLowerCase().includes(term.toLowerCase())
      }
    })

    setFilteredTransactions(filtered)
  }

  return (
    <TransactionContext.Provider
      value={{ transactions, filteredTransactions, handleFilter }}
    >
      {children}
    </TransactionContext.Provider>
  )
}

export const useTransaction = () => useContext(TransactionContext)
