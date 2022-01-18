import React from 'react'
import { FiX as IconClose } from 'react-icons/fi'
import { useTransaction } from '../../contexts/TransactionContext'

import { ITransaction } from '../../models/Transaction'
import { StatusBar } from '../StatusBar'

import {
  Wrapper,
  Dialog,
  CloseButton,
  Title,
  Content,
  Description
} from './styles'

export type ModalProps = {
  transaction: ITransaction
}

export const Modal = ({ transaction }: ModalProps) => {
  const { modalIsOpen: isOpen, toggleModal: onClose } = useTransaction()

  return (
    <Wrapper isVisible={isOpen}>
      <Dialog open={isOpen}>
        <CloseButton onClick={onClose} title="close dialog">
          <IconClose size={18} />
        </CloseButton>

        <Title>{transaction.title}</Title>

        <StatusBar status={transaction.status} />

        <Content>
          <Title>Transferindo de</Title>
          <Description>
            <p>{transaction.from}</p>
            <p>{transaction.amountFormatted}</p>
          </Description>

          <Title>Para</Title>
          <Description>
            <p>{transaction.to}</p>
            <p>{transaction.amountFormatted}</p>
          </Description>
        </Content>
      </Dialog>
    </Wrapper>
  )
}
