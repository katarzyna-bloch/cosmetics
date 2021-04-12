import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import PageWrapper from '../../components/PageWrapper'
import ContentHeader from '../../components/ContentHeader'
import ProductsList from '../../components/ProductsList'
import { requestSale } from '../../redux/actions'

export const Sale = ({ fetchProducts, products }) => {
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <PageWrapper>
      <ContentHeader>Promocje, które zachwycą każdego</ContentHeader>
      <ProductsList products={products} />
    </PageWrapper>
  )
}

const mapStateToProps = ({ sale }) => ({
  products: sale,
})

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(requestSale()),
})

Sale.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Sale)
