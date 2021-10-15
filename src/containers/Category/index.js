import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

import ContentHeader from '../../components/ContentHeader'
import PageWrapper from '../../components/PageWrapper'
import ProductsList from '../../components/ProductsList'
import { requestCategory } from '../../redux/actions'

export const Category = ({ fetchCategoryByUrl, category, match: { url } }) => {
  useEffect(() => {
    fetchCategoryByUrl(url)
  }, [url])

  if (!category) {
    return null
  }

  return (
    <PageWrapper>
      <ContentHeader>{category.heading}</ContentHeader>
      <ProductsList products={category.products} />
    </PageWrapper>
  )
}

const mapStateToProps = ({ category }) => ({
  category,
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
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(Category)
