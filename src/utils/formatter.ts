import STATUS from './status'

import { TransactionStatusProps } from '../models/Transaction'

export const formatStatus = (status: TransactionStatusProps) => {
  const [{ label }] = STATUS.filter(({ value }) => value === status)

  return label
}

export const formatAmount = (amount: number) => {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}
