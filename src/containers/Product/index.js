import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

import ProductComponent from '../../components/Product'
import { requestProduct } from '../../redux/actions'
import Breadcrumb from '../../components/Breadcrumb'
import PageWrapper from '../../components/PageWrapper'
import Preloader from '../../components/Preloader'

export const Product = ({ fetchProducts, product, match: { params: { id } }, loading }) => {
  useEffect(() => {
    fetchProducts(id)
  }, [])

  if (!product || loading) {
    return <Preloader />
  }

  const values = [
    { label: product.category.name, link: product.category.url },
    { label: product.name },
  ]

  return (
    <PageWrapper>
      <Breadcrumb values={values} />
      <ProductComponent {...product} />
    </PageWrapper>
  )
}

const mapStateToProps = ({ product }) => ({
  ...product,
})

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (id) => dispatch(requestProduct(id)),
})

Product.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  product: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(Product)
