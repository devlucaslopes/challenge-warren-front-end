import React from 'react'

import { Layout } from './components/Layout'
import { Filter } from './components/Filter'
import { Transactions } from './components/Transactions'

function App() {
  return (
    <Layout>
      <Filter />
      <Transactions />
    </Layout>
  )
}

export default App
