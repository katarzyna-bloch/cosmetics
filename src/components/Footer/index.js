import styled from 'styled-components'

const Wrapper = styled.footer`
  background-color: ghostwhite;
  padding: 10px;
`

const Link = styled.a`
  text-decoration: none;
  color: black;
  margin: 30px;
`

const Footer = () => (     
  <Wrapper>
    <Link href="http://facebook.com" target="_blank">Facebook</Link>
    <Link href="http://instagram.com" target="_blank">Instagram</Link>
    <Link href="http://youtube.com" target="_blank">YouTube</Link>
  </Wrapper>
)

export default Footer
