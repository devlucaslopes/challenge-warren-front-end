import React, { useState } from 'react'
import { Modal } from '../Modal'

import * as S from './styles'

export const Transactions = () => {
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
          <tr role="button" onClick={toggleModal}>
            <td>Resgate</td>
            <td>Carteira 1 para 2</td>
            <td>Solicitada</td>
            <td>R$ 1000</td>
          </tr>
          <tr role="button" onClick={toggleModal}>
            <td>Resgate</td>
            <td>Carteira 1 para 2</td>
            <td>Solicitada</td>
            <td>R$ 1000</td>
          </tr>
          <tr role="button" onClick={toggleModal}>
            <td>Resgate</td>
            <td>Carteira 1 para 2</td>
            <td>Solicitada</td>
            <td>R$ 1000</td>
          </tr>
        </tbody>
      </S.Table>

      <Modal isOpen={modalIsOpen} onClose={toggleModal} />
    </>
  )
}
