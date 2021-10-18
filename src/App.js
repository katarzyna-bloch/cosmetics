import React from 'react'
import { HashRouter as Router } from 'react-router-dom'

import Header from './components/Header'
import Navigation from './containers/Navigation'
import Main from './components/Main'
import Footer from './components/Footer'
import Routes from './Routes'

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
