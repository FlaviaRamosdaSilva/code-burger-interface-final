import React from 'react'

import { useHistory } from 'react-router-dom'
import Cart from '../../assets/Cart-Header.png'
import Person from '../../assets/User-Header.png'
import { useUser } from '../../hooks/UseContext'
import {
  Container,
  ContainerLeft,
  ContainerRight,
  ContainerText,
  Line,
  PageLink,
  PageLinkExit
} from './styles'

export function Header() {
  const { logout, UserData } = useUser()
  console.log(UserData)

  const logoutUser = () => {
    logout()
    push('/login')
  }

  const {
    push, // desestruturamos o history pra ficar só com o push dai lá embaixo substituímos o history.push por apenas push
    location: { pathname }
  } = useHistory()

  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => push('/produtos')}
          isActive={pathname.includes('produtos')}
        >
          Ver Produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink onClick={() => push('/carrinho')}>
          <img src={Cart} alt="carrinho" />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={Person} alt="usuário" />
        </PageLink>
        <ContainerText>
          <p>Olá {UserData.name} </p>
          <PageLinkExit onClick={logoutUser} to="/login">
            Sair
          </PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
