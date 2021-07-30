import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Nav from '../../components/Navigation'
import { requestCategories } from '../../redux/actions'

export const Navigation = ({ fetchCategories, categories }) => {
  useEffect(() => {
    fetchCategories()
  }, [])

  if (!categories) {
    return null
  }

  return (
    <Nav categories={categories} />
  )
}

const mapStateToProps = ({ categories }) => ({
  categories,
})

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(requestCategories()),
})

Navigation.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
  categories: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
