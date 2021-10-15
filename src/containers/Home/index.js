import styled from 'styled-components'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ContentHeader from '../../components/ContentHeader'
import Banners from '../../components/Banners'
import PageWrapper from '../../components/PageWrapper'
import ProductsSlider from '../../components/ProductsSlider'
import { requestBanners, requestTopProducts, requestSale } from '../../redux/actions'

const Heading = styled(ContentHeader)`
  font-size: 25px;
  margin: 20px 0;
`

export const Home = ({ fetchSaleProducts, saleProducts, topProducts, fetchTopProducts, banners, fetchBanners }) => {
  useEffect(() => {
    fetchSaleProducts()
    fetchTopProducts()
    fetchBanners()
  }, [])

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

const mapStateToProps = ({ sale, topProducts, banners }) => ({
  saleProducts: sale,
  topProducts,
  banners,
})

const mapDispatchToProps = (dispatch) => ({
  fetchSaleProducts: () => dispatch(requestSale()),
  fetchTopProducts: () => dispatch(requestTopProducts()),
  fetchBanners: () => dispatch(requestBanners()),
})

Home.propTypes = {
  fetchSaleProducts: PropTypes.func.isRequired,
  saleProducts: PropTypes.array.isRequired,
  topProducts: PropTypes.array.isRequired,
  fetchTopProducts: PropTypes.func.isRequired,
  banners: PropTypes.array.isRequired,
  fetchBanners: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
