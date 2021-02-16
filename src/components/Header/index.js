import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

const Wrapper = styled.header`
  background-color: palevioletred;
  padding-top: 10px;
  display: flex;
  justify-content: center;
`

const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  color: black;
`

const Photo = styled.img`
  width: 50px;
  margin: 0px 0px 20px 10px;
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
      <Title>Blog o kosmetykach</Title>
      <Photo src="kosmetyki.png" alt='kosmetyki' />   
    </Link>
  </Wrapper>
)

export default Header
