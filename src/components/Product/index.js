import styled from 'styled-components'
import media from '../../utils/media'
import PropTypes from 'prop-types'

import Price from '../Price'
import { getProductImagesPath } from '../../utils/images'

const Wrapper = styled.div``

const ContainerDetails = styled.div`
  flex-direction: row;
  display: flex;
  padding-top: 25px;

  ${media.phone} {
    flex-direction: column;
  }
`

const ContentDetails = styled.div`
  flex: 2;
`

const ContentImage = styled(ContentDetails)`
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 0px 20px 20px 0px;

  ${media.phone} {
    padding: 0px 0px 20px 0px;
  }
`

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  object-fit: cover;
`

const BrandName = styled.div`
  font-family: sans-serif;
  font-weight: 600;
  font-size: 20px;
  padding-bottom: 5px;
`

const ProductName = styled.div`
  font-weight: 600;
  padding-bottom: 15px;
`

const ProductDetails = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px 0px;
  border-top: 1px solid lightgrey;
`

const DeliverContent = styled(ProductDetails)`
  ${media.tablet} {
    flex-direction: column;
  }
`

const Volume = styled.div`
  flex: 1;
  font-weight: 600;
`

const DeliveryInfo = styled.div`
  font-weight: 600;
  color: lightgreen;
  flex: 1;
`
const Delivery = styled.div``

const ContainerDescription = styled.div``

const ProductDescription = styled.div`
  font-weight: 600;
`

const Product = ({ img, brand, name, volume, oldPrice, price, description, hasDiscount }) => (
  <Wrapper>
    <ContainerDetails>
      <ContentImage>
        <Image src={getProductImagesPath(img)} alt="photo" />
      </ContentImage>

      <ContentDetails>
        <BrandName>{brand}</BrandName>
        <ProductName>{name}</ProductName >

        <ProductDetails>
          <Volume>{volume}</Volume>
          <Price price={price} oldPrice={oldPrice} hasDiscount={hasDiscount} />
        </ProductDetails>

        <DeliverContent>
          <DeliveryInfo>Produkt dostępny</DeliveryInfo>
          <Delivery>Dostawa gratis od 99 zł</Delivery>
        </DeliverContent>
      </ContentDetails>
    </ContainerDetails>

    <ContainerDescription>
      <ProductDescription>Opis Produktu</ProductDescription>
      {description}
    </ContainerDescription>
  </Wrapper>
)

Product.propTypes = {
  img: PropTypes.string,
  brand: PropTypes.string,
  name: PropTypes.string,
  volume: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  oldPrice: PropTypes.string,
  hasDiscount: PropTypes.bool,
}

export default Product
