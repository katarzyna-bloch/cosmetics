import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

import { requestSearch } from '../../redux/actions'
import ProductsList from '../../components/ProductsList'
import PageWrapper from '../../components/PageWrapper'
import ProductNotFound from '../../components/ProductNotFound'
import ContentHeader from '../../components/ContentHeader'
import Preloader from '../../components/Preloader'

export const Search = ({ fetchProducts, searchProducts, location: { search }, loading }) => {
  const searchParams = new URLSearchParams(search)
  const query = searchParams.get('q')
  
  useEffect(() => {
    fetchProducts(search)
  }, [search])
  
  if (loading) {
    return <Preloader />
  }

  return (
    <PageWrapper>
      {searchProducts.length > 0 ? (
        <>
          <ContentHeader>Wyniki dla frazy: {query} ({searchProducts.length})</ContentHeader>
          <ProductsList products={searchProducts} />
        </>
      ) : (
        <ProductNotFound />
      )}
    </PageWrapper>
  )
}

const mapStateToProps = ({ searchProducts }) => ({
  ...searchProducts
})

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (search) => dispatch(requestSearch(search)),
})

Search.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  searchProducts: PropTypes.array.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(Search)
