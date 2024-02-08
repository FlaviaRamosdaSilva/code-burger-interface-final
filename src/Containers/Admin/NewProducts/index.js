import React, { useEffect, useState } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import * as Yup from 'yup'

import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { useHistory } from 'react-router-dom'
import apiCodeBurger from '../../../services/api'

import ReactSelect from 'react-select'
import { toast } from 'react-toastify'
import { ErrorMessage } from '../../../components'
import { ButtonStyle, Container, Input, Label, LabelUpload } from './styles'

function NewProducts() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const { push } = useHistory()

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do Produto'),
    price: Yup.string().required('O preço é obrigatória'),
    category: Yup.object().required('Escolha uma categoria'),
    file: Yup.mixed()
      .test('required', 'carregue um arquivo', value => {
        return value && value.length > 0
      })
      .test('fileSize', 'Carregue arquivos de até 2MB', value => {
        return value && value[0].size <= 200000
      })
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async data => {
    // usamos o FormData para colocar os produtos por que no insomnia não é no body que colocamos as infos, então aqui não dá só pra enviar normal, até por que tem o FILE(imagem)
    const productDataFormData = new FormData()
    productDataFormData.append('name', data.name)
    productDataFormData.append('price', data.price)
    productDataFormData.append('category_id', data.category.id)
    productDataFormData.append('file', data.file[0])

    await toast.promise(apiCodeBurger.post('products', productDataFormData), {
      pending: 'Criando novo produto',
      success: 'Produto criado com sucesso',
      error: 'Falha ao cadastrar o produto'
    })
    // chamamos a api no post já com os dados formatados do jeito correto
    setTimeout(() => {
      push('listar-produtos')
    }, 2000)
  }

  useEffect(() => {
    async function loadCategories() {
      const { data } = await apiCodeBurger.get('categories')
      setCategories(data)
    }
    loadCategories()
  }, [])

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label>Name</Label>
        <Input type="text" {...register('name')} />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>

        <Label>Preço</Label>
        <Input type="number" {...register('price')} />
        <ErrorMessage>{errors.price?.message}</ErrorMessage>

        <LabelUpload>
          {fileName || (
            <>
              <CloudUploadIcon style={{ marginRight: '10px' }} />
              Carregue a imagem do produto
            </>
          )}
          <input
            type="file"
            accept="image/png, image/jpeg"
            {...register('file')}
            onChange={value => {
              setFileName(value.target.files[0]?.name)
            }}
          />
        </LabelUpload>
        <ErrorMessage>{errors.file?.message}</ErrorMessage>
        <Controller
          name="category"
          control={control}
          render={({ field }) => {
            return (
              <ReactSelect
                {...field}
                placeholder="Escolha a categoria"
                options={categories}
                getOptionLabel={cat => cat.name}
                getOptionValue={cat => cat.id}
              />
            )
          }}
        ></Controller>
        <ErrorMessage>{errors.category?.message}</ErrorMessage>
        <ButtonStyle>Adicionar Produtos</ButtonStyle>
      </form>
    </Container>
  )
}

export default NewProducts
