import PropTypes from 'prop-types'
import React, { createContext, useContext, useEffect, useState } from 'react'
// criar contexto e usar contexto, conforme documentação do Context

const CartContext = createContext({})
// conforme documentação do react

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const putProductInCart = async product => {
    // carrinho de compra
    const cartIndex = cartProducts.findIndex(pdr => pdr.id === product.id)
    let newCartProducts = []

    if (cartIndex >= 0) {
      // se o index for maior ou igual a zero, é pq o produto já existe no carrinho, vamos mudar a quantidade
      newCartProducts = cartProducts // criei uma variável e clonei o cartProducts
      newCartProducts[cartIndex].quantity = // procuro a posição do array que está meu produto repetido e vejo a quantidade
        newCartProducts[cartIndex].quantity + 1 // depois eu aumento a quantidade com +1
      setCartProducts(newCartProducts)
    } else {
      // quando o produto não tiver no carrinho, vamos adicionar
      product.quantity = 1
      newCartProducts = [...cartProducts, product]
      setCartProducts(newCartProducts)
    }

    await localStorage.setItem(
      // aqui adicionamos no localstorage o item e a quantidade estipuladas ali em cima
      'codeburger:cartInfo',
      JSON.stringify(newCartProducts)
    )
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = await localStorage.getItem('codeburger:cartInfo')

      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData))
      }
    }
    loadUserData()
  }, [])

  return (
    <CartContext.Provider value={{ putProductInCart, cartProducts }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used with UserCOntext')
  }
  return context
}

CartProvider.propTypes = {
  children: PropTypes.node
}
