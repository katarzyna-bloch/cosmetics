import styled from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'

const Image = styled.img`
  height: 180px;
  padding: 15px 20px 0px;
`
const Wrapper = styled.div`
  cursor: pointer;
  margin: 10px;
  border-radius: 2px;
`

const Name = styled.div`
  text-align: center;
`
const Price = styled.div`
  font-weight: 600;
  text-align: center;
  padding:5px;
`
const BorderWrapper = styled.div`
  &:hover ${Wrapper} {
  border: 1px solid lightgray;
}
`

const Product = ({ name, img, price }) => ( 
  <BorderWrapper>
    <Wrapper>
      <Image src={img} alt='cosmetic' />
      <Name>{name}</Name>
      <Price>{price}</Price>
    </Wrapper>
  </BorderWrapper>
)

Product.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
}

export default Product
