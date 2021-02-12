import styled from 'styled-components'

const Text = styled.h1`
  top: 0;
  left: 0;
  position: sticky;
  background-color: palevioletred;
  padding: 20px;
`
const Header = () => {
  return (     
    <Text>Blog o kosmetykach</Text>
  )
}
export default Header
