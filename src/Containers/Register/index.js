import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import Logo from '../../assets/logo.svg'
import RegisterImg from '../../assets/Register-img.svg'
import { ContainerButton } from '../../components/Button/styles'
import apiCodeBurger from '../../services/api'
import {
  Container,
  ContainerItens,
  ErrorMessage,
  Input,
  Label,
  RegisterImage,
  SignInLink
} from './styles'

function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha tem que ter pelo menos 6 dígitos'),
    confirmPassword: Yup.string()
      .required('A senha é obrigatória')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    try {
      const { status } = await apiCodeBurger.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Cadastro realizado com sucesso', {
          theme: 'colored'
        })
      } else if (status === 409) {
        toast.error('E-mail já cadastrada, faça o Login para continuar', {
          theme: 'colored'
        })
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema! Tente novamamente', { theme: 'colored' })
    }
  }

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="Register-Image" />
      <ContainerItens>
        <img src={Logo} alt="logo-CodeBurger" />
        <h1>Cadastre-se</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
          <Label error={errors.email?.message}>E-mail</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
          <Label error={errors.password?.message}>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
          <Label error={errors.confirmPassword?.message}>Confirmar Senha</Label>
          <Input
            type="password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
          <ContainerButton
            type="submit"
            style={{ marginTop: 25, marginBottom: 25 }}
          >
            Sign Up
          </ContainerButton>
          {/* ao clicar no button com type onsubmite ele vai para a função onsubmit do form e da variavel lá em cima e te dá as informações no console.log */}
        </form>
        <SignInLink>
          Já possui conta ? <a>Sign In</a>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}

export default Register
