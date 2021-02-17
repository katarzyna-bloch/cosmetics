import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import media from '../../utils/media'

const Nav = styled.nav`
  top: 0;
  left: 0;
  position: sticky;
  background-color: lightgray;
  padding: 10px;
`

const Link = styled(RouterLink)`
  padding-right: 30px;
  text-decoration: none;
  color: black;

  ${media.phone} {
    padding-right: 15px;
  }
`

const Search = styled.input``


const Navigation = () => (
  <Nav>
    <Link to="/cleaning">Oczyszczanie</Link>
    <Link to="/make-up-removal">Demakijaż</Link>
    <Link to="/care">Pielęgnacja</Link>
    <Search type='text' placeholder='szukaj' />
  </Nav>
)

export default Navigation
