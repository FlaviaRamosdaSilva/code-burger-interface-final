import PropTypes from 'prop-types'
import React from 'react'
import paths from '../../Constants/paths'
import { SideMenuAdmin } from '../../components'
import Orders from '../Admin/Orders'
import EditProducts from './EditProducts'
import ListProducts from './ListProducts'
import NewProducts from './NewProducts'
import { Container, ContainerItems } from './styles'

export function Admin({ match: { path } }) {
  return (
    <Container>
      <SideMenuAdmin path={path} />
      <ContainerItems>
        {path === paths.Order && <Orders />}
        {path === paths.Products && <ListProducts />}
        {path === paths.NewProduct && <NewProducts />}
        {path === paths.EditProduct && <EditProducts />}
      </ContainerItems>
    </Container>
  )
}

Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}
