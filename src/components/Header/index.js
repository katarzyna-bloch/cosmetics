import styled from 'styled-components'

const Wrapper = styled.header`
  top: 0;
  left: 0;
  position: sticky;
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
