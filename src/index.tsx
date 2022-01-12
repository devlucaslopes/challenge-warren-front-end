import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'
import GlobalStyles from './styles/global'

import { TransactionProvider } from './contexts/TransactionContext'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <TransactionProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles {...theme} />
        <App />
      </ThemeProvider>
    </TransactionProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
