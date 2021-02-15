import styled from 'styled-components'

const Nav = styled.nav`
  top: 0;
  left: 0;
  position: sticky;
  background-color: lightgray;
  padding: 20px;
`

const Link = styled.a`
  padding: 40px;
  font-weight: 600;
  text-decoration: none;
  color: black;
`

const Search = styled.input`
  margin-left: 50px;
`

const Navigation = () => (     
  <Nav>
    <Link href="/">Oczyszczanie</Link>
    <Link href="/">Demakijaż</Link>
    <Link href="/">Pielegnacja</Link>
    <Search type='text' placeholder='szukaj'/>
  </Nav>
)

export default Navigation
