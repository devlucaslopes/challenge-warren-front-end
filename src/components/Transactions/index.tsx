import React, { useState } from 'react'
import { useTransaction } from '../../contexts/TransactionContext'

import { ITransaction } from '../../models/Transaction'
import { Modal } from '../Modal'

import { Table } from './styles'

export const Transactions = () => {
  const { toggleModal, findTransactionById, filteredTransactions } =
    useTransaction()

  const [selectedTransaction, setSelectedTransaction] = useState<ITransaction>(
    {} as ITransaction
  )

  const showTransactionDetails = (id: string) => {
    const transaction = findTransactionById(id)

    if (!transaction) return

    setSelectedTransaction(transaction)
    toggleModal()
  }

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descrição</th>
            <th>Status</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr
              data-testid={`transaction-row-${transaction.id}`}
              key={transaction.id}
              role="button"
              onClick={() => showTransactionDetails(transaction.id)}
            >
              <td>{transaction.title}</td>
              <td>{transaction.description}</td>
              <td>{transaction.statusFormatted}</td>
              <td>{transaction.amountFormatted}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal transaction={selectedTransaction} />
    </>
  )
}
