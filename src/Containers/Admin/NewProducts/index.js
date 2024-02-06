import React, { useEffect } from 'react'

import { useForm } from 'react-hook-form'
import { Button } from '../../../components'
import apiCodeBurger from '../../../services/api'

import ReactSelect from 'react-select'
import { Container, Input, Label } from './styles'

function NewProducts() {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)

  useEffect(() => {
    async function loadProducts() {
      const { data } = await apiCodeBurger.get('products')
    }
    loadProducts()
  }, [])

  return (
    <Container>
      <form noValidate>
        <Label>Name</Label>
        <Input type="text" {...register('name')} />

        <Label>Preço</Label>
        <Input type="number" {...register('price')} />

        <Label>Upload da Imagem</Label>
        <Input type="file" accept="image/png, image/jpeg" />

        <ReactSelect />

        <Button>Adicionar Produtos</Button>
      </form>
    </Container>
  )
}

export default NewProducts
