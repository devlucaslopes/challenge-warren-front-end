import React, { useEffect, useState } from 'react'

import { Wrapper, Bar, FilledBar, Checkpoints } from './styles'

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
    <Wrapper>
      <Bar>
        <FilledBar
          percentageFilled={percentageFilled}
          data-testid="filled-bar"
        />
      </Bar>
      <Checkpoints>
        <span>Solicitada</span>
        <span>Processando</span>
        <span>Concluída</span>
      </Checkpoints>
    </Wrapper>
  )
}
