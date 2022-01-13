import React from 'react'
import { FiX as IconClose } from 'react-icons/fi'
import { useTransaction } from '../../contexts/TransactionContext'

import { ITransaction } from '../../models/Transaction'

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
        {/* BARRA DE PROGRESSO */}
        <S.Content>dadasdasdasdasos</S.Content>
      </S.Dialog>
    </S.Wrapper>
  )
}
