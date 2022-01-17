import React, { useEffect, useState } from 'react'

import * as S from './styles'

type StatusBarProps = {
  status: string
}

export const StatusBar = ({ status }: StatusBarProps) => {
  const [percentageFilled, setPercentageFilled] = useState(0)

  useEffect(() => {
    if (status === 'created' || status == undefined) return

    if (status === 'processing') {
      setPercentageFilled(50)
    } else {
      setPercentageFilled(100)
    }
  }, [status])

  return (
    <S.Wrapper>
      <S.Bar>
        <S.FilledBar
          percentageFilled={percentageFilled}
          data-testid="filled-bar"
        />
      </S.Bar>
      <S.Checkpoints>
        <span>Solicitada</span>
        <span>Processando</span>
        <span>Concluída</span>
      </S.Checkpoints>
    </S.Wrapper>
  )
}
