import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Routes from './Routes'

const Main = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  flex: 1;
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
