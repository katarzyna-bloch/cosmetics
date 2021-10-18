import PropTypes from 'prop-types'

import Banner from '../Banner'
import Carousel from '../Carousel'

const Banners = ({ banners }) => {
  const items = banners.map(banner => (
    <Banner {...banner}>{banner.src}</Banner>
  ))
  
  return (
    <Carousel
      items={items}
      settings={{ slidesToShow: 1, autoplay: true, dots: true }}
    />
  )
}

Banners.propTypes = {
  banners: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
}

export default Banners
