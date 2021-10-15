import PropTypes from 'prop-types'
import styled from 'styled-components'

import Carousel from '../Carousel'
import { sizes } from '../../utils/media'
import ProductListItem, { Image } from '../ProductListItem'

const ListItem = styled(ProductListItem)`
  padding: 0;

  ${Image} {
    height: 260px;
  }
`

export const ProductsSlider = ({ products }) => {
  const items = products.map(product => (
    <ListItem product={product} key={product.id} />
  ))

  return (
    <Carousel
      items={items}
      settings={{
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: sizes.tablet,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            }
          },
          {
            breakpoint: sizes.phone,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          } 
        ],
        gap: 30,
      }}
    />
  )
}

ProductsSlider.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    oldPrice: PropTypes.string,
    hasDiscount: PropTypes.bool,
  })).isRequired,
}

export default ProductsSlider
