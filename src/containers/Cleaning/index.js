import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import PageWrapper from '../../components/PageWrapper'
import ContentHeader from '../../components/ContentHeader'
import ProductsList from '../../components/ProductsList'
import { requestCleaningProducts } from '../../redux/actions'

export const Cleaning = ({ fetchProducts, products }) => {
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <PageWrapper>
      <ContentHeader>Oczyszczanie to podstawowy krok w dojściu do pięknej skóry</ContentHeader>
      <ProductsList
        products={products}
      />
    </PageWrapper> 
  )     
}

const mapStateToProps = ({ cleaningProducts}) => ({
  products: cleaningProducts,
})

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(requestCleaningProducts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cleaning)
