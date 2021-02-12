import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Navigation from './components/Navigation'

const Main = styled.main`
  flex: 1;
  align-self: center;
  max-width: 1024px;
  padding: 10px;
`

const Footer = styled.footer`
  background-color: palevioletred;
`

const App = () => (
  <>
    <Header />
    <Navigation />
    <Main>content</Main>
    <Footer>...</Footer>
  </>
);

export default App
