import styled from 'styled-components'

const Photo = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  max-height: 100%;
  width: 100%;
  object-fit: cover;
  /* max-width: 1024px; */
`

const Home = () => ( 
  <Photo src="photo.jpg" alt='kosmetyki' /> 
)

export default Home