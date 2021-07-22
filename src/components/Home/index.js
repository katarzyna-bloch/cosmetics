import styled from 'styled-components'

const Photo = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const Home = () => ( 
  <Photo src="cosmetics.jpg" alt="kosmetyki" /> 
)

export default Home
