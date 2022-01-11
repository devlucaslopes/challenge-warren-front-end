import React from 'react'
import { FiX as IconClose } from 'react-icons/fi'

import * as S from './styles'

export type ModalProps = {
  isOpen: boolean
  onClose: () => void
}

export const Modal = ({ isOpen, onClose }: ModalProps) => (
  <S.Wrapper isVisible={isOpen}>
    <S.Dialog open={isOpen}>
      <S.CloseButton onClick={onClose}>
        <IconClose size={18} />
      </S.CloseButton>

      <S.Title>Depósito</S.Title>
      {/* BARRA DE PROGRESSO */}
      <S.Content>dadasdasdasdasos</S.Content>
    </S.Dialog>
  </S.Wrapper>
)
