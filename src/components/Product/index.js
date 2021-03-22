import styled from 'styled-components'
import media from '../../utils/media'
import PropTypes from 'prop-types'

import PageWrapper from '../PageWrapper'

const Wrapper = styled(PageWrapper)`
  flex-direction: column;
  padding: 15px;
`

const ContainerDetails = styled.div`
  flex-direction: row;
  display: flex;
  padding-top: 20px;

  ${media.phone} {
    flex-direction: column;
  }
`

const ContentDetails = styled.div`
  flex: 1;
`

const ContentImage = styled(ContentDetails)`
  display: flex;
  justify-content: center;

  ${media.tablet} {
    padding: 20px;
  }
`

const Image = styled.img`
  max-width: 100%;
  height: auto;
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

const Price = styled.div`
  font-weight: 600;
`

const Volume = styled(Price)`
  flex: 1;
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

const Product = ({ img, brand, name, volume, price, description }) => (
  <Wrapper>
    <ContainerDetails>
      <ContentImage>
        <Image src={img} alt='photo' />
      </ContentImage>

      <ContentDetails>
        <BrandName>{brand}</BrandName>
        <ProductName>{name}</ProductName >

        <ProductDetails>
          <Volume>{volume}</Volume>
          <Price>{price}</Price>
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
}

export default Product
