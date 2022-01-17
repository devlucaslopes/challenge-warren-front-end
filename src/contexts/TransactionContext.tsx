import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

import { ITransaction } from '../models/Transaction'
import { api } from '../services/api'
import { formatAmount, formatStatus } from '../utils/formatter'

type HandleFilterProps = {
  term: string
  status: string
}

type TransactionProviderProps = {
  children: ReactNode
}

export type TransactionContextProps = {
  transactions: ITransaction[]
  filteredTransactions: ITransaction[]
  modalIsOpen: boolean
  handleFilter: (data: HandleFilterProps) => void
  toggleModal: () => void
  findTransactionById: (id: string) => ITransaction | undefined
}

export const TransactionContext = createContext({} as TransactionContextProps)

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])
  const [filteredTransactions, setFilteredTransactions] = useState<
    ITransaction[]
  >([])
  const [modalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {
    api.get<ITransaction[]>('/').then(({ data }) => {
      const formatted = data.map((transaction) => {
        return {
          ...transaction,
          statusFormatted: formatStatus(transaction.status),
          amountFormatted: formatAmount(transaction.amount)
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

  const toggleModal = () => setModalIsOpen((prev) => !prev)

  const findTransactionById = (id: string) =>
    transactions.find((transaction) => transaction.id === id)

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        filteredTransactions,
        handleFilter,
        toggleModal,
        modalIsOpen,
        findTransactionById
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}

export const useTransaction = () => useContext(TransactionContext)
