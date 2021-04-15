import styled from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'
import media from '../../utils/media'
import { Link as RouterLink } from 'react-router-dom'
import Price from '../Price'

const Link = styled(RouterLink)`
  text-decoration: none;
  color: black;
  flex: 0 25%;
  border: 1px solid transparent;
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

const Wrapper = styled.div`
  text-align: center;
`

const Image = styled.img`
  height: 180px;
  padding: 15px 20px 0px;

  ${media.tablet} {
    height: 140px;
  }
`

const Name = styled.div`
  text-align: center;
  padding: 5px;
`

const ProductListItem = ({ id, name, img, oldPrice, price, hasDiscount }) => (
  <Link to={`products/${id}`}>
    <Wrapper>
      <Image src={img} alt="cosmetic" />
      <Name>{name}</Name>
      <Price hasDiscount={hasDiscount} oldPrice={oldPrice} price={price} />
    </Wrapper>
  </Link>
)

ProductListItem.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  oldPrice: PropTypes.string,
  hasDiscount: PropTypes.bool,
}

export default ProductListItem
