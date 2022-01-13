import React, { FormEvent, useState } from 'react'

import { useTransaction } from '../../contexts/TransactionContext'
import STATUS from '../../utils/status'

import * as S from './styles'

export const Filter = () => {
  const { handleFilter } = useTransaction()

  const [term, setTerm] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault()

    handleFilter({ term, status })
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Pesquise pelo título da transação"
        onChange={(e) => setTerm(e.target.value)}
      />

      <select onChange={(e) => setStatus(e.target.value)}>
        <option value="">Status</option>
        {STATUS.map(({ value, label }) => (
          <option key={label} value={value}>
            {label}
          </option>
        ))}
      </select>

      <select name="" id="">
        <option value="">Ordenar por</option>
      </select>

      <button type="submit">Filtrar</button>
    </S.Form>
  )
}
