import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import media from '../../utils/media'

const Nav = styled.nav`
  top: 0;
  left: 0;
  position: sticky;
  background-color: ghostwhite;
  padding: 10px;
  z-index: 1;
  display: flex;
  justify-content: center;

  ${media.tablet} {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-right: 15px;
  }
`
const ContentLink = styled.div``

const Link = styled(RouterLink)`
  padding-right: 30px;
  text-decoration: none;
  color: black;

  ${media.phone} {
    padding-right: 15px;
  }
`
const ContentForm = styled.form`
  ${media.tablet} {
    margin-top: 10px;
  }
`
const Search = styled.input``
const Button = styled.button``

const Navigation = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  
  return (
    <Nav>
      <ContentLink>
        <Link to="/home-spa">Domowe SPA</Link>
        <Link to="/cleaning">Oczyszczanie</Link>
        <Link to="/care">Pielęgnacja</Link>
      </ContentLink>
      <ContentForm onSubmit={handleSubmit}>
        <Search type="text" placeholder="znajdź produkt" />
        <Button type="submit">Szukaj</Button>
      </ContentForm>
    </Nav>
  )
}

export default Navigation
