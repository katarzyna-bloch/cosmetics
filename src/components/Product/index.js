import styled from 'styled-components'
import PageWrapper from '../PageWrapper'
import media from '../../utils/media'

const product = { 
  id: "1",
  brand: "resibo",
  name: "Cytrusowy Peeling Enzymatyczny w Żelu",
  volume: "120ml",
  price: "89zł",
  type: "homeSpa",
  img: "https://www.topestetic.pl/img/zdjecia/strona-big/resibo-regenerating-body-scrub-lotus-effect-regenerujacy-peeling-do-ciala-300-g.jpg?1613602801",
  description: "Skuteczne złuszczanie i intensywna regeneracja po jednym użyciu. Peeling sprawia, że nawet bardzo zmęczona i sucha skóra od razu staje się gładka, miękka, silnie nawilżona i ujędrniona. Zrogowaciały naskórek znika, a specjalne dobrane aktywne składniki natychmiast pobudzają skórę do wytwarzania nowych, zdrowych komórek. Stosować podczas kąpieli. Nabrać peeling w dłonie i masować całe ciało okrężnymi ruchami. Zacząć od stóp i kierować się stopniowo w górę. Masować zawsze w kierunku serca."
}

const Wrapper = styled(PageWrapper)`
  flex-direction: column;
  padding: 15px;
`
const ContainerDetails = styled.div`
  flex-direction: row;
  display: flex;

  ${media.phone} {
    flex-direction: column;
  }
`

const ContentDetails = styled.div`
  flex: 1;
  flex-direction: column;
`

const ContentImage = styled(ContentDetails)`
  padding-top: 15px;

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
  padding: 40px 0px 5px 0px;
`

const ProductName = styled.div`
  font-weight: 600;
  padding-bottom: 15px;
`


const ProductDetails = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px 0px 15px 0px;
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

const Product = () => (
  <Wrapper>
    <ContainerDetails>
      <ContentImage>
        <Image src={product.img} alt='photo'/>
      </ContentImage>

      <ContentDetails>
        <BrandName>{product.brand}</BrandName>
        <ProductName>{product.name}</ProductName >

        <ProductDetails>
          <Volume>{product.volume}</Volume>
          <Price>{product.price}</Price>
        </ProductDetails>

        <DeliverContent>
          <DeliveryInfo>Produkt dostępny</DeliveryInfo>
          <Delivery>Dostawa gratis od 99zł</Delivery>
        </DeliverContent>
      </ContentDetails>
    </ContainerDetails>

    <ContainerDescription> 
      <ProductDescription>Opis Produktu</ProductDescription>
      {product.description}
    </ContainerDescription>
  </Wrapper>

      
)

export default Product
