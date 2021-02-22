import styled from 'styled-components'
import PropTypes from 'prop-types'

const Name = styled.div`
  text-align: center;
`

const Image = styled.img`
  height: 180px;
  padding: 15px 10px 40px;
`

const Product = (props) => ( 
  <div>
    <Name>{props.name}</Name>
    <Image src={props.img} alt='kosmetyk' />
  </div>
)

Product.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}

export default Product
