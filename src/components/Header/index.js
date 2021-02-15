import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

const Wrapper = styled.header`
  background-color: palevioletred;
  padding: 10px;
`

const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  color: black;
`

const Photo = styled.img`
  width: 50px;
  position: absolute;
  right: 250px;
  top: 15px;
`

const Link = styled(RouterLink)`
  text-decoration: none;
`

const Header = () => (     
  <Wrapper>
    <Link to="/">
      <Title>Blog o kosmetykach</Title>
      <Photo src="kosmetyki1.png" alt='kosmetyki' />   
    </Link>
  </Wrapper>
)

export default Header
