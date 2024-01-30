import PropTypes from 'prop-types'
import React, { createContext, useContext, useEffect, useState } from 'react'
// criar contexto e usar contexto, conforme documentação do Context

const CartContext = createContext({})
// conforme documentação do react

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const putProductInCart = async product => {
    console.log(product)
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
