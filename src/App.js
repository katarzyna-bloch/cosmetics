import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const Main = styled.main`
  flex: 1;
  align-self: center;
  max-width: 1024px;
  padding: 10px;
`

const App = () => (
  <>
    <Header />
    <Navigation />
    <Main>content</Main>
    <Footer />
  </>
);

export default App
