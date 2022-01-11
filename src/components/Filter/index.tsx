import React from 'react'

import * as S from './styles'

export const Filter = () => (
  <S.Form action="">
    <input type="text" placeholder="Pesquise pelo título da transação" />
    <select name="" id="">
      <option value="0">processando</option>
      <option value="1">solicitada</option>
      <option value="2">concluída</option>
    </select>
    <button type="submit">Filtrar</button>
  </S.Form>
)
