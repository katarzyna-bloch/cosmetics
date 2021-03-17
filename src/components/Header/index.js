import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import media from '../../utils/media'

const Wrapper = styled.header`
  background-color: ghostwhite;
  padding-top: 10px;
  display: flex;
  justify-content: center;
`

const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  color: black;

  ${media.phone} {
    font-size: 25px;
  }
`

const Photo = styled.img`
  width: 50px;
`

const Link = styled(RouterLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Header = () => (     
  <Wrapper>
    <Link to="/">
      <Title>Sklep kosmetyczny</Title>
      <Photo src="/logo.png" alt='cosmetics' />   
    </Link>
  </Wrapper>
)

export default Header
