import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

import ContentHeader from '../../components/ContentHeader'
import PageWrapper from '../../components/PageWrapper'
import ProductsList from '../../components/ProductsList'
import { requestCategory } from '../../redux/actions'
import Preloader from '../../components/Preloader'

export const Category = ({ fetchCategoryByUrl, category, match: { url }, loading}) => {
  useEffect(() => {
    fetchCategoryByUrl(url)
  }, [url])

  if (!category || loading) {
    return <Preloader />
  }

  return (
    <PageWrapper>
      <ContentHeader>{category.heading}</ContentHeader>
      <ProductsList products={category.products} />
    </PageWrapper>
  )
}

const mapStateToProps = ({ category }) => ({
  ...category,
})

const mapDispatchToProps = (dispatch) => ({
  fetchCategoryByUrl: (url) => dispatch(requestCategory(url)),
})

Category.propTypes = {
  fetchCategoryByUrl: PropTypes.func.isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  category: PropTypes.object,
  loading: PropTypes.bool.isRequired,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(Category)
