import React from 'react'

import CartLogo from '../../assets/cart-image.svg'
import { CartItems } from '../../components'
import { Cartimg, Container } from './styles'

export function Cart() {
  return (
    <Container>
      <Cartimg src={CartLogo} alt="logo do carrinho" />
      <CartItems />
    </Container>
  )
}
