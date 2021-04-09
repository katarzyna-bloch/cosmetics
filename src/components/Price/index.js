import styled from 'styled-components'
import PropTypes from 'prop-types'

const ContentPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const OldPrice = styled.div`
  text-decoration: line-through;
  font-weight: 600;
  padding-right: 10px;
`

const PriceAfterDiscount = styled.div`
  font-weight: 600;
  color:  ${props => (props.hasDiscount ? 'red' : 'none')};
`

const Price = ({ oldPrice, hasDiscount, price }) => (
  <ContentPrice>
    {oldPrice && (
      <OldPrice>{oldPrice}</OldPrice>
    )}
    <PriceAfterDiscount hasDiscount={hasDiscount}>{price}</PriceAfterDiscount>
  </ContentPrice>
)

Price.propTypes = {
  price: PropTypes.string,
  oldPrice: PropTypes.string,
  hasDiscount: PropTypes.bool,
}

export default Price
