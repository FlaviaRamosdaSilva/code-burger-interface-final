import React from 'react'

import CartLogo from '../../assets/cart-image.svg'
import { CartItems, CartResume } from '../../components'
import { Cartimg, Container, Wrapper } from './styles'

export function Cart() {
  return (
    <Container>
      <Cartimg src={CartLogo} alt="logo do carrinho" />
      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
    </Container>
  )
}
