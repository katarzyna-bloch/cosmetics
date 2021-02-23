import styled from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'

import Product from '../Product'

const List = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`

const ProductsList = ({ products }) => ( 
  <List>
    {products.map(({ name, img, id}) => (
      <Product
        key={id}
        name={name}
        img={img}
      />
    ))}
  </List>
)

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
}

export default ProductsList
