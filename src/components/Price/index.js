import styled from 'styled-components'
import PropTypes from 'prop-types'

const OldPrice = styled.div`
  text-decoration: line-through;
  font-weight: 600;
  padding-right: 10px;
`

const PriceAfterDiscount = styled.div`
  font-weight: 600;
  color:  ${props => (props.hasDiscount ? 'red' : 'none')};
`

const Price = ({oldPrice, hasDiscount, price}) => {
  return (
  <>
    {oldPrice && (
      <OldPrice>{oldPrice}</OldPrice>
    )}
    <PriceAfterDiscount hasDiscount={hasDiscount}>{price}</PriceAfterDiscount>
  </>
  )
}

Price.propTypes = {
  oldPrice: PropTypes.string,
  hasDiscount: PropTypes.bool,
  price: PropTypes.string,
}

export default Price
