import PropTypes from 'prop-types'
import React from 'react'

import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { useHistory } from 'react-router-dom'
import { useUser } from '../../hooks/UseContext'
import listLinks from './menu-list'
import { Container, ContainerItem, ListLink } from './styles'

export function SideMenuAdmin({ path }) {
  const { push } = useHistory() // desestruturamos o history pra ficar só com o push dai lá embaixo substituímos o history.push por apenas push
  const { logout } = useUser()

  const logoutUser = () => {
    logout()
    push('/login')
  }

  return (
    <Container>
      <hr></hr>
      {listLinks.map(item => (
        <ContainerItem key={item.id} isActive={path === item.link}>
          <item.icon className="icon" />
          <ListLink to={item.link}>{item.label}</ListLink>
        </ContainerItem>
      ))}
      <hr></hr>
      <ContainerItem style={{ position: 'fixed', bottom: '30px' }}>
        <ExitToAppIcon className="icon" />
        <ListLink onClick={logoutUser} to="/login">
          Sair
        </ListLink>
      </ContainerItem>
    </Container>
  )
}
SideMenuAdmin.propTypes = {
  path: PropTypes.string
}
