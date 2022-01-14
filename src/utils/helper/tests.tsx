import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../../styles/global'
import theme from '../../styles/theme'

export const renderWithTheme = (children: React.ReactNode) => {
  return render(
    <ThemeProvider theme={theme}>
      <GlobalStyles {...theme} />
      {children}
    </ThemeProvider>
  )
}
