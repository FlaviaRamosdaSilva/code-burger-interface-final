import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { Link, useHistory } from 'react-router-dom'
import LoginImg from '../../assets/login-img.svg'
import Logo from '../../assets/logo.svg'
import { ErrorMessage } from '../../components'
import { ContainerButton } from '../../components/Button/styles'
import { useUser } from '../../hooks/UseContext'
import apiCodeBurger from '../../services/api'
import {
  Container,
  ContainerItens,
  Input,
  Label,
  LoginImage,
  SignInLink
} from './styles'

export function Login() {
  const { putUserData } = useUser()
  const history = useHistory()

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
    try {
      const { data } = await apiCodeBurger.post('sessions', {
        email: clientData.email,
        password: clientData.password
      })
      putUserData(data)
      // Lógica de sucesso
      toast.success('Seja Bem-vindo')

      setTimeout(() => {
        if (data.admin) {
          history.push('/pedidos')
        } else {
          history.push('/')
        }
      }, 1000)
      // settimeout junto com o UseHystory fazem a página ser redirecionada para o HOME após ser efetuado o login (1segundo depois)
    } catch (error) {
      console.error('Erro na requisição:', error)
      if (error.response && error.response.status === 401) {
        // Exibir mensagem específica para erro 401
        toast.error('Verifique seu e-mail e senha')
      } else {
        // Exibir mensagem genérica para outros erros
        toast.error('Ocorreu um erro ao processar a solicitação')
      }
    }
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
            type="onSubmit"
            style={{ marginTop: 75, marginBottom: 25 }}
          >
            Sign In
          </ContainerButton>
          {/* ao clicar no button com type onsubmit ele vai para a função onsubmit do form e da variavel lá em cima e te dá as informações no console.log */}
        </form>
        <SignInLink>
          Não possui conta?{' '}
          <Link style={{ color: 'white' }} to="/cadastro">
            Sign Up
          </Link>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}
