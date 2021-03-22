import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

import ProductComponent from '../../components/Product'
import { requestProduct } from '../../redux/actions'

export const Product = ({ fetchProducts, product, match: { params: { id } } }) => {
  useEffect(() => {
    fetchProducts(id)
  }, [])
  return (
    <ProductComponent {...product} />
  )
}

const mapStateToProps = ({ product }) => ({
  product: product,
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
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(Product)
