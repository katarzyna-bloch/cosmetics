import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import PageWrapper from '../../components/PageWrapper'
import ContentHeader from '../../components/ContentHeader'
import ProductsList from '../../components/ProductsList'
import { requestCareProducts } from '../../redux/actions'

export const Care = ({ fetchProducts, products }) => {
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <PageWrapper>
      <ContentHeader>Aby uzyskać zdrowy wygląd cery, należy przestrzegać codzienną pielęgnację twarzy</ContentHeader>
      <ProductsList products={products} />
    </PageWrapper>
  )
}

const mapStateToProps = ({ careProducts }) => ({
  products: careProducts,
})

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(requestCareProducts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Care)
