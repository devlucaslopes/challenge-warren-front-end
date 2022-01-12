export type TransactionStatusProps = 'created' | 'processing' | 'processed'

type TransactionTitleProps = 'Resgate' | 'Depósito' | 'Movimentação interna'

export interface ITransaction {
  amount: number
  date: string
  description: string
  from: string
  id: string
  status: TransactionStatusProps
  title: TransactionTitleProps
  to: string
}
