import PropTypes from 'prop-types'
import React from 'react'

import formatCurrency from '../../Utils/formatCurrency'
import { Button } from '../Button'
import { Container, Image, ProductName, ProductPrice } from './styles'

export function CardProducts({ product }) {
  return (
    <Container>
      <Image src={product.url} alt="imagem do produto" />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
        <Button>Adicionar</Button>
      </div>
    </Container>
  )
}

CardProducts.propTypes = {
  product: PropTypes.object
}
