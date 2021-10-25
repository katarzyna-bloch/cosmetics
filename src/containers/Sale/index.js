import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import PageWrapper from '../../components/PageWrapper'
import ContentHeader from '../../components/ContentHeader'
import ProductsList from '../../components/ProductsList'
import { requestSale } from '../../redux/actions'
import Preloader from '../../components/Preloader'

export const Sale = ({ fetchProducts, saleProducts, loading }) => {
  useEffect(() => {
    fetchProducts()
  }, [])

  if (loading) {
    return <Preloader />
  }

  return (
    <PageWrapper>
      <ContentHeader>Promocje, które zachwycą każdego</ContentHeader>
      <ProductsList products={saleProducts} />
    </PageWrapper>
  )
}

const mapStateToProps = ({ saleProducts }) => ({
  ...saleProducts,
})

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(requestSale()),
})

Sale.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  saleProducts: PropTypes.array.isRequired, 
  loading: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Sale)
