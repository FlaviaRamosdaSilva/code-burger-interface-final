import PropTypes from 'prop-types'
import React, { createContext, useContext, useEffect, useState } from 'react'
// criar contexto e usar contexto, conforme documentação do Context

const CartContext = createContext({})
// conforme documentação do react

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const updateLocalStorage = async products => {
    await localStorage.setItem('codeburger:cartInfo', JSON.stringify(products))
  }

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

    await updateLocalStorage(newCartProducts)
    // aqui adicionamos no localstorage o item e a quantidade estipuladas ali em cima
  }

  const deleteProducts = async productId => {
    const newCart = cartProducts.filter(product => product.id !== productId)
    // a função vai deletar o produto que tiver esse ID // no filter só vai retornar os produtos que são diferentes do productId que está chegando
    setCartProducts(newCart)

    await updateLocalStorage(newCart)
  }

  const increaseProducts = async productId => {
    // aqui ta vindo o ID do produto que eu selecionei o +
    const newCart = cartProducts.map(product => {
      // vou procurar esse iD
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product // Se eu achar o Id correspondete, ele vai deixar tudo igual e vai adciionar +1
    })

    setCartProducts(newCart)

    await updateLocalStorage(newCart)
  }

  const decreaseProducts = async productId => {
    const cartIndex = cartProducts.findIndex(pd => pd.id === productId)
    // aqui vou localizar o index do id que eu apertei

    if (cartProducts[cartIndex].quantity > 1) {
      // se for maior que 1 eu faço igual lá em cima só que "-1"

      const newCart = cartProducts.map(product => {
        // vou procurar esse iD
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product // Se eu achar o Id correspondete, ele vai deixar tudo igual e vai diminuir 1
      })

      setCartProducts(newCart)

      await updateLocalStorage(newCart)
    } else {
      deleteProducts(productId)
    }
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
    <CartContext.Provider
      value={{
        putProductInCart,
        cartProducts,
        increaseProducts,
        decreaseProducts
      }}
    >
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
