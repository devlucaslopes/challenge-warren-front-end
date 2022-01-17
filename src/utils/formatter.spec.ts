import { formatStatus, formatAmount } from './formatter'

describe('Formatter', () => {
  it('should return status formatted', () => {
    expect(formatStatus('created')).toBe('Solicitada')
    expect(formatStatus('processing')).toBe('Processando')
    expect(formatStatus('processed')).toBe('Concluída')
  })

  it('should return amount formatted', () => {
    expect(formatAmount(2000.66)).toContain('R$')
  })
})
