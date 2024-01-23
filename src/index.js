import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import Register from './Containers/Register'
import { UserProvider } from './hooks/UseContext'
import GlobalStyles from './styles/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <UserProvider>
      <Register />
    </UserProvider>
    <ToastContainer autoClose={3000} theme="dark" />
    <GlobalStyles />
  </>
)
