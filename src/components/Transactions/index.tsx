import React from 'react'

import * as S from './styles'

export const Transactions = () => (
  <S.Table>
    <thead>
      <tr>
        <th>Título</th>
        <th>Descrição</th>
        <th>Status</th>
        <th>Valor</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Resgate</td>
        <td>Carteira 1 para 2</td>
        <td>Solicitada</td>
        <td>R$ 1000</td>
      </tr>
      <tr>
        <td>Resgate</td>
        <td>Carteira 1 para 2</td>
        <td>Solicitada</td>
        <td>R$ 1000</td>
      </tr>
      <tr>
        <td>Resgate</td>
        <td>Carteira 1 para 2</td>
        <td>Solicitada</td>
        <td>R$ 1000</td>
      </tr>
      <tr>
        <td>Resgate</td>
        <td>Carteira 1 para 2</td>
        <td>Solicitada</td>
        <td>R$ 1000</td>
      </tr>
    </tbody>
  </S.Table>
)
