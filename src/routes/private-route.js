import PropTypes from 'prop-types'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
// Private Route é para as páginas serem acessadas apenas com login, ou seja, com o localstorage configurado com os dados do usuário.

function PrivateRoute({ component, ...rest }) {
  const user = localStorage.getItem('codeburger:userData')

  if (!user) {
    return <Redirect to="/login" />
  }
  return <Route {...rest} component={component} />
}

export default PrivateRoute

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]) // aqui eu to dizendo que o que chega lá no component da function é uma função ou um elemento.
}
