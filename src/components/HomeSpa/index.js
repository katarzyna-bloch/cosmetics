import React, {useState} from 'react'
import PageWrapper from '../PageWrapper'
import ContentHeader from '../ContentHeader'
import ProductsList from '../ProductsList'

const cosmetics = [
  { 
    id: '1',
    name: 'Peeling',
    img: 'https://www.topestetic.pl/img/zdjecia/strona-big/resibo-regenerating-body-scrub-lotus-effect-regenerujacy-peeling-do-ciala-300-g.jpg?1613602801',
  },
  {  
    id: '2',
    name: 'Szczotka',
    img: 'https://www.topestetic.pl/img/zdjecia/strona-big/mokosh-body-massage-brush-szczotka-do-masazu-ciala-1-szt.jpg?1613602801',
  },
  {
    id: '3',
    name: 'Olejek',
    img: 'https://www.topestetic.pl/img/zdjecia/strona-big/veoli-botanica-enjoy-the-calmness-relaksuja-cy-olejek-do-ciala-z-platkami-ro-z-y-150-ml.jpg',
  },
  {
    id: '4',
    name: 'Peeling',
    img: 'https://www.topestetic.pl/img/zdjecia/strona-big/resibo-regenerating-body-scrub-lotus-effect-regenerujacy-peeling-do-ciala-300-g.jpg?1613602801',
  },
  {  
    id: '4',
    name: 'Szczotka',
    img: 'https://www.topestetic.pl/img/zdjecia/strona-big/mokosh-body-massage-brush-szczotka-do-masazu-ciala-1-szt.jpg?1613602801',
  },
  {
    id: '5',
    name: 'Olejek',
    img: 'https://www.topestetic.pl/img/zdjecia/strona-big/veoli-botanica-enjoy-the-calmness-relaksuja-cy-olejek-do-ciala-z-platkami-ro-z-y-150-ml.jpg',
  },
  {
    id: '6',
    name: 'Peeling',
    img: 'https://www.topestetic.pl/img/zdjecia/strona-big/resibo-regenerating-body-scrub-lotus-effect-regenerujacy-peeling-do-ciala-300-g.jpg?1613602801',
  },
  {  
    id: '7',
    name: 'Szczotka',
    img: 'https://www.topestetic.pl/img/zdjecia/strona-big/mokosh-body-massage-brush-szczotka-do-masazu-ciala-1-szt.jpg?1613602801',
  },
  {
    id: '8',
    name: 'Olejek',
    img: 'https://www.topestetic.pl/img/zdjecia/strona-big/veoli-botanica-enjoy-the-calmness-relaksuja-cy-olejek-do-ciala-z-platkami-ro-z-y-150-ml.jpg',
  },
  {
    id: '9',
    name: 'Peeling',
    img: 'https://www.topestetic.pl/img/zdjecia/strona-big/resibo-regenerating-body-scrub-lotus-effect-regenerujacy-peeling-do-ciala-300-g.jpg?1613602801',
  },
  {  
    id: '10',
    name: 'Szczotka',
    img: 'https://www.topestetic.pl/img/zdjecia/strona-big/mokosh-body-massage-brush-szczotka-do-masazu-ciala-1-szt.jpg?1613602801',
  },
  {
    id: '11',
    name: 'Olejek',
    img: 'https://www.topestetic.pl/img/zdjecia/strona-big/veoli-botanica-enjoy-the-calmness-relaksuja-cy-olejek-do-ciala-z-platkami-ro-z-y-150-ml.jpg',
  },
]

function HomeSpa() { 
  const [products, setProducts] = useState(cosmetics)

  return (
    <PageWrapper>
      <ContentHeader>Relaks dla ciała i duszy</ContentHeader>
      <ProductsList products={cosmetics}/>
    </PageWrapper>
  )
}

export default HomeSpa
