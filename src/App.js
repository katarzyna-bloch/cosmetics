import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  background-color: palevioletred;
`

const Main = styled.main`
  flex: 1;
  align-self: center;
  max-width: 1024px;
  padding: 10px;
`

const Footer = styled.footer`
  background-color: palevioletred;
`

function App() {
  return (
    <>
      <Header>...</Header>
      <Main>content</Main>
      <Footer>...</Footer>
    </>
  );
}

export default App;
