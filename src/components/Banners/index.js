import PropTypes from 'prop-types'

import Banner from '../Banner'
import Carousel from '../Carousel'

const Banners = ({ banners }) => {
  const items = banners.map(banner => (
    <Banner banner={banner}>{banner.src}</Banner>
  ))
  
  return (
    <Carousel
      items={items}
      settings={{ slidesToShow: 1, autoplay: true, dots: true }}
    />
  )
}

Banners.propTypes = {
  banners: PropTypes.array.isRequired,
}

export default Banners
