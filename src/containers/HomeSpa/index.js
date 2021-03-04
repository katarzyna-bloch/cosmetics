import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import PageWrapper from '../../components/PageWrapper'
import ContentHeader from '../../components/ContentHeader'
import ProductsList from '../../components/ProductsList'
import { requestHomeSpaProducts } from '../../redux/actions'

export const HomeSpa = ({ fetchProducts, products }) => {
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <PageWrapper>
      <ContentHeader> Profesjonalne SPA w domowym zaciszu, relaks dla ciała i duszy</ContentHeader>
      <ProductsList products={products}/>
    </PageWrapper>
  )
}

const mapStateToProps = ({ homeSpaProducts }) => ({
  products: homeSpaProducts,
})

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(requestHomeSpaProducts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeSpa)
