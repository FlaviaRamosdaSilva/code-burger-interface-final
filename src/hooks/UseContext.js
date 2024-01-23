import PropTypes from 'prop-types'
import React, { createContext, useContext, useState } from 'react'
// criar contexto e usar contexto, conforme documentação do Context

const UserContext = createContext({})
// conforme documentação do react

export const UserProvider = ({ children }) => {
  // colocamos aqui dentro as informações que vamos precisar para usar em todas as páginas
  const [UserData, setUserData] = useState({})

  const putUserData = UserInfo => {
    // responsável por pegar meus dados e colocar dentro do Estado
    setUserData(UserInfo)
  }
  return (
    <UserContext.Provider value={{ putUserData, UserData }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  // use + o contexto que é User
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be used with UserCOntext')
  }
  return context
}

UserProvider.propTypes = {
  children: PropTypes.node
}
