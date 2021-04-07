import styled from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'

import ProductListItem from '../ProductListItem'

const List = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`

const ProductsList = ({ products }) => {
  return (
    <List>
      {products.map(({ name, img, id, oldPrice, price, hasDiscount }) => (
        <ProductListItem
          id={id}
          key={id}
          name={name}
          img={img}
          oldPrice={oldPrice}
          price={price}
          hasDiscount={hasDiscount}
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
    hasDiscount: PropTypes.bool,
  })).isRequired,
}

export default ProductsList
