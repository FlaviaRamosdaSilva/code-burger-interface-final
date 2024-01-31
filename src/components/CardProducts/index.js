import PropTypes from 'prop-types'
import React from 'react'

import { useHistory } from 'react-router-dom'
import formatCurrency from '../../Utils/formatCurrency'
import { useCart } from '../../hooks/CartContext'
import { Button } from '../Button'
import { Container, Image, ProductName, ProductPrice } from './styles'

export function CardProducts({ product }) {
  const { push } = useHistory()
  const { putProductInCart } = useCart()
  return (
    <Container>
      <Image src={product.url} alt="imagem do produto" />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
        <Button
          onClick={() => {
            putProductInCart(product)
            push('/carrinho')
          }}
        >
          Adicionar
        </Button>
      </div>
    </Container>
  )
}

CardProducts.propTypes = {
  product: PropTypes.object
}
