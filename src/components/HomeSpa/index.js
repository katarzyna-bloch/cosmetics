import React, {useState} from 'react'
import PageWrapper from '../PageWrapper'
import ContentHeader from '../ContentHeader'
import ProductList from '../ProductList'

const cosmetics = [
  {
    name: 'Peeling',
    img: 'https://www.topestetic.pl/img/zdjecia/strona-big/resibo-regenerating-body-scrub-lotus-effect-regenerujacy-peeling-do-ciala-300-g.jpg?1613602801',
  },
  {  
    name: 'Szczotka',
    img: 'https://www.topestetic.pl/img/zdjecia/strona-big/mokosh-body-massage-brush-szczotka-do-masazu-ciala-1-szt.jpg?1613602801',
  },
  {
    name: 'Olejek',
    img: 'https://www.topestetic.pl/img/zdjecia/strona-big/veoli-botanica-enjoy-the-calmness-relaksuja-cy-olejek-do-ciala-z-platkami-ro-z-y-150-ml.jpg',
  },
  {
    name: 'Peeling',
    img: 'https://www.topestetic.pl/img/zdjecia/strona-big/resibo-regenerating-body-scrub-lotus-effect-regenerujacy-peeling-do-ciala-300-g.jpg?1613602801',
  },
  {  
    name: 'Szczotka',
    img: 'https://www.topestetic.pl/img/zdjecia/strona-big/mokosh-body-massage-brush-szczotka-do-masazu-ciala-1-szt.jpg?1613602801',
  },
  {
    name: 'Olejek',
    img: 'https://www.topestetic.pl/img/zdjecia/strona-big/veoli-botanica-enjoy-the-calmness-relaksuja-cy-olejek-do-ciala-z-platkami-ro-z-y-150-ml.jpg',
  },
  {
    name: 'Peeling',
    img: 'https://www.topestetic.pl/img/zdjecia/strona-big/resibo-regenerating-body-scrub-lotus-effect-regenerujacy-peeling-do-ciala-300-g.jpg?1613602801',
  },
  {  
    name: 'Szczotka',
    img: 'https://www.topestetic.pl/img/zdjecia/strona-big/mokosh-body-massage-brush-szczotka-do-masazu-ciala-1-szt.jpg?1613602801',
  },
  {
    name: 'Olejek',
    img: 'https://www.topestetic.pl/img/zdjecia/strona-big/veoli-botanica-enjoy-the-calmness-relaksuja-cy-olejek-do-ciala-z-platkami-ro-z-y-150-ml.jpg',
  },
  {
    name: 'Peeling',
    img: 'https://www.topestetic.pl/img/zdjecia/strona-big/resibo-regenerating-body-scrub-lotus-effect-regenerujacy-peeling-do-ciala-300-g.jpg?1613602801',
  },
  {  
    name: 'Szczotka',
    img: 'https://www.topestetic.pl/img/zdjecia/strona-big/mokosh-body-massage-brush-szczotka-do-masazu-ciala-1-szt.jpg?1613602801',
  },
  {
    name: 'Olejek',
    img: 'https://www.topestetic.pl/img/zdjecia/strona-big/veoli-botanica-enjoy-the-calmness-relaksuja-cy-olejek-do-ciala-z-platkami-ro-z-y-150-ml.jpg',
  },
]

function HomeSpa() { 
  const [products, setProducts] = useState(cosmetics)

  return (
    <PageWrapper>
      <ContentHeader>Relaks dla ciała i duszy</ContentHeader>
      <ProductList products={cosmetics}/>
    </PageWrapper>
  )
}

export default HomeSpa
