import React, { useState } from 'react'
import { useTransaction } from '../../contexts/TransactionContext'

import { ITransaction } from '../../models/Transaction'
import { Modal } from '../Modal'

import * as S from './styles'

export type TransactionsProps = {
  data: ITransaction[]
}

export const Transactions = ({ data }: TransactionsProps) => {
  const { toggleModal, findTransactionById } = useTransaction()

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
      <S.Table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descrição</th>
            <th>Status</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {data.map((transaction) => (
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
      </S.Table>

      <Modal transaction={selectedTransaction} />
    </>
  )
}
