import React from 'react'
import styled from 'styled-components'
import PageWrapper from '../PageWrapper'
import ContentHeader from '../ContentHeader'

const Content = styled(PageWrapper)`
  text-align: center;
`

const ProductNotFound = () => (
  <Content>
    <ContentHeader>Nie znaleziono produktu :(</ContentHeader>
  </Content>
)

export default ProductNotFound
