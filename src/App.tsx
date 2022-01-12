import React, { useEffect, useState } from 'react'

import { Layout } from './components/Layout'
import { Filter } from './components/Filter'
import { Transactions } from './components/Transactions'
import { Section } from './components/Section'

import { useTransaction } from './contexts/TransactionContext'

function App() {
  const { filteredTransactions } = useTransaction()

  return (
    <Layout>
      <Section>
        <Filter />
      </Section>
      <Section title="Lista de transações">
        <Transactions data={filteredTransactions} />
      </Section>
    </Layout>
  )
}

export default App
