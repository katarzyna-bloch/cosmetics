import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Routes from './Routes'

const Main = styled.main`
  flex: 1;
  align-self: center;
  max-width: 1024px;
  padding: 10px;
`

const App = () => (
  <Router>
    <Header />
    <Navigation />
    <Main>
      <Routes />
    </Main>
    <Footer />
  </Router>
)

export default App
