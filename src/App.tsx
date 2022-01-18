import React from 'react'
import { ThemeProvider } from 'styled-components'

import { TransactionProvider } from './contexts/TransactionContext'

import { Layout } from './components/Layout'
import { Filter } from './components/Filter'
import { Transactions } from './components/Transactions'
import { Section } from './components/Section'

import GlobalStyles from './styles/global'
import theme from './styles/theme'

function App() {
  return (
    <TransactionProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles {...theme} />
        <Layout>
          <Section>
            <Filter />
          </Section>
          <Section title="Lista de transações">
            <Transactions />
          </Section>
        </Layout>
      </ThemeProvider>
    </TransactionProvider>
  )
}

export default App
