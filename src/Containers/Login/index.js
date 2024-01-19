import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import LoginImg from '../../assets/login-img.svg'
import Logo from '../../assets/logo.svg'
import { ContainerButton } from '../../components/Button/styles'
import { useUser } from '../../hooks/UseContext'
import apiCodeBurger from '../../services/api'
import {
  Container,
  ContainerItens,
  ErrorMessage,
  Input,
  Label,
  LoginImage,
  SignInLink
} from './styles'

function Login() {
  const users = useUser()

  console.log(users)

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha tem que ter pelo menos 6 dígitos')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const response = await toast.promise(
      apiCodeBurger.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Seja Bem-vindo',
        error: 'Verifique seu e-mail e senha'
      }
    )
    console.log(response)
  }

  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-Image" />
      <ContainerItens>
        <img src={Logo} alt="logo-CodeBurger" />
        <h1>Login</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>E-mail</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
          <Label>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
          <ContainerButton
            type="submit"
            style={{ marginTop: 75, marginBottom: 25 }}
          >
            Sign In
          </ContainerButton>
          {/* ao clicar no button com type onsubmite ele vai para a função onsubmit do form e da variavel lá em cima e te dá as informações no console.log */}
        </form>
        <SignInLink>
          Não possui conta ? <a>Sign Up</a>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}

export default Login
