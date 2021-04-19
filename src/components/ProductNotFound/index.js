import React from 'react'
import styled from 'styled-components'
import PageWrapper from '../PageWrapper'

const Content = styled(PageWrapper)`
  text-align: center;
`

const ProductNotFound = () => (
  <Content>
    <h3>Nie znaleziono produktu :(</h3>
  </Content>
)

export default ProductNotFound
