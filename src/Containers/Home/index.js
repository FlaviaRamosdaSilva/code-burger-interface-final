import React from 'react'

import HomeLogo from '../../assets/HomeLogo.svg'
import CategoryCarousel from '../../components/CategoryCarousel'
import OfferCarousel from '../../components/OfferCarousel'
import { Container, Homeimg } from './styles'

function Home() {
  return (
    <Container>
      <Homeimg src={HomeLogo} alt="logo da home" />
      <CategoryCarousel />
      <OfferCarousel />
    </Container>
  )
}

export default Home
