import React, { useEffect, useState } from 'react'
import apiCodeBurger from '../../../services/api'
import { Container } from './styles'
// import Box from '@mui/material/Box';
// import Collapse from '@mui/material/Collapse';
// import IconButton from '@mui/material/IconButton';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// simport KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Orders() {
  const [orders, setOrders] = useState([])

  console.log(orders)

  useEffect(() => {
    async function loadOrders() {
      const { data } = await apiCodeBurger.get('orders')
      setOrders(data)
    }
    loadOrders()
  }, [])


  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: order.createdAt,
      products: order.products
    };
  }
  return <Container>Pedidos</Container>
}

export default Orders
