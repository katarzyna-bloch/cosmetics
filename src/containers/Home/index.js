import styled from 'styled-components'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ContentHeader from '../../components/ContentHeader'
import Banners from '../../components/Banners'
import PageWrapper from '../../components/PageWrapper'
import ProductsSlider from '../../components/ProductsSlider'
import Preloader from '../../components/Preloader'
import { requestDashboardData } from '../../redux/actions'

const Heading = styled(ContentHeader)`
  font-size: 25px;
  margin: 20px 0;
`

export const Home = ({ fetchDashboardData, saleProducts, topProducts, banners, loading }) => {
  useEffect(() => {
    fetchDashboardData()
  }, [])
  
  if (loading) {
    return <Preloader />
  }

  return (
    <PageWrapper>
      <Banners banners={banners} />
      <Heading>W tym tygodniu w promocji</Heading>
      <ProductsSlider products={saleProducts} />
      <Heading>Top oferty</Heading>
      <ProductsSlider products={topProducts} />
    </PageWrapper>
  )
}

const mapStateToProps = ({ dashboard }) => ({
  ...dashboard,
})

const mapDispatchToProps = (dispatch) => ({
  fetchDashboardData: () => dispatch(requestDashboardData()),
})

Home.propTypes = {
  fetchDashboardData: PropTypes.func.isRequired,
  saleProducts: PropTypes.array.isRequired,
  topProducts: PropTypes.array.isRequired,
  banners: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
