import React, { useEffect, useState } from 'react'

import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import formatCurrency from '../../Utils/formatCurrency'
import { useCart } from '../../hooks/CartContext'
import { useUser } from '../../hooks/UseContext'
import apiCodeBurger from '../../services/api'
import { Button } from '../Button'
import { Container } from './styles'

export function CartResume() {
  const { push } = useHistory()
  const { cartProducts } = useCart()
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(5)
  const { cleanCart } = useUser()

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
    cleanCart()
    setTimeout(() => {
      push('produtos')
      window.location.reload(false)
    }, 2000)
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
