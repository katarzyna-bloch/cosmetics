import styled from 'styled-components'

const Wrapper = styled.header`
  background-color: palevioletred;
  padding: 20px;
`
const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
`
const Header = () => (     
  <Wrapper>
    <Title>Blog o kosmetykach</Title>
  </Wrapper>
)

export default Header
