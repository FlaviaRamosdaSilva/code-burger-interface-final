import PropTypes from 'prop-types'
import React from 'react'

import { CartProvider } from './CartContext'
import { UserProvider } from './UseContext'

const AppProvider = ({ children }) => (
  <CartProvider>
    <UserProvider>{children}</UserProvider>
  </CartProvider>
)

AppProvider.propTypes = {
  children: PropTypes.node
}

export default AppProvider
