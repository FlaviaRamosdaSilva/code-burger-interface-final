import PropTypes from 'prop-types'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { Header } from '../components'
// Private Route é para as páginas serem acessadas apenas com login, ou seja, com o localstorage configurado com os dados do usuário.

function PrivateRoute({ component, isAdmin, ...rest }) {
  const user = localStorage.getItem('codeburger:userData')

  if (!user) {
    return <Redirect to="/login" />
  }
  if (isAdmin && !JSON.parse(user).admin) {
    return <Redirect to="/" />
  }
  return (
    <>
      {!isAdmin && <Header />}
      <Route {...rest} component={component} />
    </>
  )
}
// se o isAdmin for falso eu quero Header, se não for falso eu não quero Header
export default PrivateRoute

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]), // aqui eu to dizendo que o que chega lá no component da function é uma função ou um elemento.
  isAdmin: PropTypes.bool
}
