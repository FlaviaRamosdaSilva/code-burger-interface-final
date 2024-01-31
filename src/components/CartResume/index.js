import React, { useEffect, useState } from 'react'

import { toast } from 'react-toastify'
import formatCurrency from '../../Utils/formatCurrency'
import { useCart } from '../../hooks/CartContext'
import apiCodeBurger from '../../services/api'
import { Button } from '../Button'
import { Container } from './styles'

export function CartResume() {
  const { cartProducts } = useCart()
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(5)

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)
    setFinalPrice(sumAllItems)
  }, [cartProducts])

  const submiteOrder = async () => {
    const order = cartProducts.map(product => {
      return { id: product.id, quantity: product.quantity }
    })
    await toast.promise(apiCodeBurger.post('orders', { products: order }), {
      pending: 'Realizando o seu pedido...',
      success: 'Pedido Realizado',
      error: 'Falha ao realizar o seu pedido, tente novamente'
    })
  }

  return (
    <div>
      <Container>
        <div className="containertop">
          <h2 className="title">Resumo do pedido</h2>
          <p className="items"> Itens</p>
          <p className="items-price">{formatCurrency(finalPrice)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
        </div>
        <div className="containerbottom">
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliveryTax)}</p>
        </div>
      </Container>
      <Button style={{ width: '100%', marginTop: 30 }} onClick={submiteOrder}>
        Finalizar pedido
      </Button>
    </div>
  )
}
