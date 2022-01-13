export type TransactionStatusProps = 'created' | 'processing' | 'processed'

type TransactionTitleProps = 'Resgate' | 'Depósito' | 'Movimentação interna'

export interface ITransaction {
  amount: number
  amountFormatted: string
  date: string
  description: string
  from: string
  id: string
  status: TransactionStatusProps
  statusFormatted: string
  title: TransactionTitleProps
  to: string
}
