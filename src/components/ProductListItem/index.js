import styled from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'
import media from '../../utils/media'
import { Link as RouterLink } from 'react-router-dom'

const Link = styled(RouterLink)`
  text-decoration: none;
  color: black;
  flex: 0 25%;

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
  cursor: pointer;
  border-radius: 2px;
  border: 1px solid transparent;
  box-sizing: border-box;
  text-align: center;

  &:hover {
    border-color: lightgray;
  }
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

const Price = styled.div`
  font-weight: 600;
  text-align: center;
  padding: 5px;
`

const ProductListItem = ({ id, name, img, price }) => (
  <Link to={`products/${id}`}>
    <Wrapper>
      <Image src={img} alt='cosmetic' />
      <Name>{name}</Name>
      <Price>{price}</Price>
    </Wrapper>
  </Link>
)

ProductListItem.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default ProductListItem
