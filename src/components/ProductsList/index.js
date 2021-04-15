import styled from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'

import ProductListItem from '../ProductListItem'

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ProductsList = ({ products }) => {
  return (
    <List>
      {products.map((product) => (
        <ProductListItem 
        {...product} 
        key={product.id}
        />
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
