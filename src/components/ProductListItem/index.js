import styled from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import Price from '../Price'
import { getImageProductsPath } from '../../utils/images'

const Link = styled(RouterLink)`
  text-decoration: none;
  color: black;
`

const Wrapper = styled.div`
  text-align: center;
  padding: 15px;
`

export const Image = styled.img`
  height: 210px;
  width: 100%;
  object-fit: cover;
`

const Name = styled.div`
  text-align: center;
  padding: 5px;
`

const ProductListItem = ({ product: {name, img, id, price, oldPrice, hasDiscount}, className }) => {
  return (
    <Link to={`/products/${id}`}>
      <Wrapper className={className}>
        <Image src={getImageProductsPath(img)} alt="cosmetics" />
        <Name>{name}</Name>
        <Price hasDiscount={hasDiscount} oldPrice={oldPrice} price={price} />
      </Wrapper>
    </Link>
  )
}

ProductListItem.propTypes = {
  className: PropTypes.string,
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    oldPrice: PropTypes.string,
    hasDiscount: PropTypes.bool,
  }).isRequired,
}

export default ProductListItem
