import React from 'react'
import { FiX as IconClose } from 'react-icons/fi'
import { useTransaction } from '../../contexts/TransactionContext'

import { ITransaction } from '../../models/Transaction'
import { StatusBar } from '../StatusBar'

import * as S from './styles'

export type ModalProps = {
  transaction: ITransaction
}

export const Modal = ({ transaction }: ModalProps) => {
  const { modalIsOpen: isOpen, toggleModal: onClose } = useTransaction()

  return (
    <S.Wrapper isVisible={isOpen}>
      <S.Dialog open={isOpen}>
        <S.CloseButton onClick={onClose}>
          <IconClose size={18} />
        </S.CloseButton>

        <S.Title>{transaction.title}</S.Title>

        <StatusBar status={transaction.status} />

        <S.Content>
          <S.Title>Transferindo de</S.Title>
          <S.Description>
            <p>{transaction.from}</p>
            <p>{transaction.amountFormatted}</p>
          </S.Description>

          <S.Title>Para</S.Title>
          <S.Description>
            <p>{transaction.to}</p>
            <p>{transaction.amountFormatted}</p>
          </S.Description>
        </S.Content>
      </S.Dialog>
    </S.Wrapper>
  )
}
