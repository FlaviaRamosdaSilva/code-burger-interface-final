import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import { useHistory } from 'react-router-dom'
import formatCurrency from '../../Utils/formatCurrency'
import OfferName from '../../assets/Offers-name.png'
import { useCart } from '../../hooks/CartContext'
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

export function OfferCarousel() {
  const { push } = useHistory()
  const [offers, setOffers] = useState([])
  const { putProductInCart } = useCart()

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
              <Price> {formatCurrency(product.price)}</Price>
              <Button
                onClick={() => {
                  putProductInCart(product)
                  push('/carrinho')
                }}
              >
                Peça agora
              </Button>
            </ContainerItens>
          ))}
      </Carousel>
    </Container>
  )
}
