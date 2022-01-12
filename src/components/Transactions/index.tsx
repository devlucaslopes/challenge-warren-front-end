import React, { useState } from 'react'

import { ITransaction } from '../../models/Transaction'
import { Modal } from '../Modal'

import * as S from './styles'

export type TransactionsProps = {
  data: ITransaction[]
}

export const Transactions = ({ data }: TransactionsProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const toggleModal = () => {
    setModalIsOpen((prev) => !prev)
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
            <tr key={transaction.id} role="button" onClick={toggleModal}>
              <td>{transaction.title}</td>
              <td>{transaction.description}</td>
              <td>{transaction.status}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </S.Table>

      <Modal isOpen={modalIsOpen} onClose={toggleModal} />
    </>
  )
}
