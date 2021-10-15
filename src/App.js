import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/Header'
import Navigation from './containers/Navigation'
import Main from './components/Main'
import Footer from './components/Footer'
import Routes from './Routes'

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Header />
    <Navigation />
    <Main>
      <Routes />
    </Main>
    <Footer />
  </Router>
)

export default App
