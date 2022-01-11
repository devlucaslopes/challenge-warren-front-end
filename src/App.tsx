import React from 'react'

import { Layout } from './components/Layout'
import { Filter } from './components/Filter'
import { Transactions } from './components/Transactions'
import { Section } from './components/Section'

function App() {
  return (
    <Layout>
      <Section>
        <Filter />
      </Section>
      <Section title="Lista de transações">
        <Transactions />
      </Section>
    </Layout>
  )
}

export default App
