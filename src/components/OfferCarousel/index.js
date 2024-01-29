import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import OfferName from '../../assets/Offers-name.png'
import apiCodeBurger from '../../services/api'
import {
  Button,
  CategoryImg,
  Container,
  ContainerItens,
  Image,
  Name,
  Price
} from './styles'

function OfferCarousel() {
  const [offers, setOffers] = useState([])

  useEffect(() => {
    async function loadOffer() {
      const { data } = await apiCodeBurger.get('products')

      const onlyOffer = data.filter(product => product.offer)
      console.log(onlyOffer)
      setOffers(onlyOffer)
    }
    loadOffer()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <CategoryImg src={OfferName} alt="logo da Ofertas" />
      <Carousel
        itemsToShow={5}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {offers &&
          offers.map(product => (
            <ContainerItens key={product.id}>
              <Image src={product.url} alt="foto do produto" />
              <Name>{product.name}</Name>
              <Price>R$ {product.price}</Price>
              <Button>Peça agora</Button>
            </ContainerItens>
          ))}
      </Carousel>
    </Container>
  )
}

export default OfferCarousel
