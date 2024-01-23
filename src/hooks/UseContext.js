import PropTypes from 'prop-types'
import React, { createContext, useContext, useEffect, useState } from 'react'
// criar contexto e usar contexto, conforme documentação do Context

const UserContext = createContext({})
// conforme documentação do react

export const UserProvider = ({ children }) => {
  // colocamos aqui dentro as informações que vamos precisar para usar em todas as páginas
  const [UserData, setUserData] = useState({})

  const putUserData = async UserInfo => {
    // vamos usar as informações e colocar dentro o Local Storage
    // responsável por pegar meus dados e colocar dentro do Estado
    setUserData(UserInfo)

    await localStorage.setItem('codeburger:userData', JSON.stringify(UserInfo))
    // Json.stringify transforma o objeto em string
  }
  useEffect(() => {
    const loadUserData = async () => {
      const clientInfo = await localStorage.getItem('codeburger:userData')
      if (clientInfo) {
        setUserData(JSON.parse(clientInfo))
      }
    }
    loadUserData()
  }, [])

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
