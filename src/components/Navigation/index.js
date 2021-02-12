import styled from 'styled-components'

const Nav = styled.nav`
  top: 0;
  left: 0;
  position: sticky;
  background-color: lightgray;
  padding: 20px;
`

const Link = styled.a`
padding: 30px;
font-weight: 600;
text-decoration: none;
color: black;
`

const Search = styled.input``

const Navigation = () => (     
  <Nav>
    <Link as="a" href="/">Oczyszczanie</Link>
    <Link as="a" href="/">Demakijaż</Link>
    <Link as="a" href="/">Pielegnacja</Link>
    <Search type='text' placeholder='szukaj'/>
  </Nav>
)

export default Navigation
