import styled from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'

import media from '../../utils/media'
import ProductListItem from '../ProductListItem'

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const ProductItemWrapper = styled.div`
  border: 1px solid transparent;
  flex: 0 25%;
  box-sizing: border-box;
  border-radius: 5px;
  
  &:hover {
    border-color: lightgray;
  }

  ${media.desktop} {
    flex: 0 33%;
  }

  ${media.tablet} {
    flex: 0 50%;
  }

  ${media.phone} {
    flex: 1 100%;
  }
`

const ProductsList = ({ products }) => {
  return (
    <List>
      {products.map((product) => (
        <ProductItemWrapper key={product.id}>
          <ProductListItem product={product} />
        </ProductItemWrapper>
      ))}
    </List>
  )
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    oldPrice: PropTypes.string,
    hasDiscount: PropTypes.bool,
  })).isRequired,
}

export default ProductsList
