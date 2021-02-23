import styled from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'

const Wrapper = styled.div``

const Name = styled.div`
  text-align: center;
`

const Image = styled.img`
  height: 180px;
  padding: 15px 10px 40px;
`

const Product = ({ name, img }) => ( 
  <Wrapper>
    <Name>{name}</Name>
    <Image src={img} alt='cosmetic' />
  </Wrapper>
)

Product.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}

export default Product
