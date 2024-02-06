import React from 'react'
import { SideMenuAdmin } from '../../components'
import ListProducts from './ListProducts'
import { Container, ContainerItems } from './styles'

export function Admin() {
  return (
    <Container>
      <SideMenuAdmin />
      <ContainerItems>
        {/* <Orders /> */}
        <ListProducts />
      </ContainerItems>
    </Container>
  )
}
