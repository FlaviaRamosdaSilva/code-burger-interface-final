import axios from 'axios'
// conforme documentação do axios

const apiCodeBurger = axios.create({
  baseURL: 'http://localhost:3001/' // endereço do backend
})

export default apiCodeBurger
