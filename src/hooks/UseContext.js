import PropTypes from 'prop-types'
import React, { createContext, useContext } from 'react'
// criar contexto e usar contexto, conforme documentação do Context

const UserContext = createContext({})
// conforme documentação do react

export const UserProvider = ({ children }) => {
  // colocamos aqui dentro as informações que vamos precisar para usar em todas as páginas
  const user = { name: 'Rodolfo', age: 18 }

  return (
    <UserContext.Provider value={{ user }}> {children} </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be used with UserCOntext')
  }
  return context
}

UserProvider.propTypes = {
  children: PropTypes.node
}
