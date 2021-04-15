import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

import { requestSearch } from '../../redux/actions'
import ProductsList from '../../components/ProductsList'
import PageWrapper from '../../components/PageWrapper'

export const Search = ({fetchProducts, products, location: { search }}) => {
  useEffect(() => {
    fetchProducts(search)
  }, [search])

  return (
    <PageWrapper>
      <ProductsList products={products} />
    </PageWrapper>
  )
}

const mapStateToProps = ({search}) => ({
  products: search,
})

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (search) => dispatch(requestSearch(search)),
})

Search.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(Search)
