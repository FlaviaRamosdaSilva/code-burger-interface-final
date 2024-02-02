import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'
import formatDates from '../../../Utils/formatDate.js'
import apiCodeBurger from '../../../services/api'
import Row from './row.js'
import { Container } from './styles.js'

function Orders() {
  const [orders, setOrders] = useState([])
  const [rows, setRows] = useState([])

  useEffect(() => {
    async function loadOrders() {
      const { data } = await apiCodeBurger.get('orders')
      setOrders(data)
    }
    loadOrders()
  }, [])

  function createData(order) {
    // formato do objeto que a gente quer que o array tenha
    return {
      name: order.user.name,
      orderId: order._id,
      date: formatDates(order.createdAt),
      products: order.products,
      status: order.status
    }
  }

  useEffect(() => {
    // toda vez que o orders mudar vou mandar tudo pro createData para arrumar as informações pra colocar na tabela
    const newRows = orders.map(ord => createData(ord))
    // vou pegar ordem por ordem e vou mandar elas pro creatdata para diagrama elas e vou guardar elas aqui
    setRows(newRows)
  }, [orders])

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do Pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <Row key={row.orderId} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Orders
