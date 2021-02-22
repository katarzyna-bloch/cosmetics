import styled from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'

import Product from '../Product'

const List = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`

const ProductList = ({ products }) => ( 
  <List>
    {products.map(({ name, img }) => (
      <Product
        key={name}
        name={name}
        img={img}
      />
    ))}
  </List>
)

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  })).isRequired,
}

export default ProductList
