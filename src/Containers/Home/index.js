import React from 'react'

import HomeLogo from '../../assets/HomeLogo.svg'
import { CategoryCarousel, OfferCarousel } from '../../components'
import { Container, Homeimg } from './styles'

export function Home() {
  return (
    <Container>
      <Homeimg src={HomeLogo} alt="logo da home" />
      <CategoryCarousel />
      <OfferCarousel />
    </Container>
  )
}
