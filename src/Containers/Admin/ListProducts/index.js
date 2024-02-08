import React, { useEffect, useState } from 'react'

import CancelIcon from '@mui/icons-material/Cancel'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useHistory } from 'react-router-dom'
import paths from '../../../Constants/paths'
import formatCurrency from '../../../Utils/formatCurrency'
import apiCodeBurger from '../../../services/api'
import { Container, EditIconStyles, Img } from './styles'

function ListProducts() {
  const [products, setProducts] = useState([])
  const { push } = useHistory()

  useEffect(() => {
    async function loadProducts() {
      const { data } = await apiCodeBurger.get('products')
      setProducts(data)
    }
    loadProducts()
  }, [])

  function isOffer(offerStatus) {
    if (offerStatus) {
      return <CheckCircleIcon style={{ color: '#008000' }} />
    }
    return <CancelIcon style={{ color: '#cc1717' }} />
  }

  function editProduct(product) {
    push(paths.EditProduct, product)
  }
  // quando eu clico no lápis de editar, chama essa função enviando os dados do produto;  nessa função nós redirecionamos para a página '/editar-produtos' e enviamos as informações do produto

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell align="center">Produto em oferta</TableCell>
              <TableCell align="center">Imagem</TableCell>
              <TableCell>Editar Produto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.map(product => (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell>{formatCurrency(product.price)}</TableCell>
                  <TableCell align="center">{isOffer(product.offer)}</TableCell>
                  <TableCell align="center">
                    <Img src={product.url} alt="imagem do produto" />
                  </TableCell>
                  <TableCell>
                    <EditIconStyles onClick={() => editProduct(product)} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ListProducts
