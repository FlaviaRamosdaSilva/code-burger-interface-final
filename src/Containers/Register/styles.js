import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  display: flex;
  align-items: center;
  justify-content: center;
`

export const RegisterImage = styled.img`
  height: 80%;
`

export const ContainerItens = styled.div`
  border-radius: 0 10px 10px 0;
  background: #373737;
  height: 80%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: #fff;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    margin-top: 17px;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`

export const Input = styled.input`
  width: 391.416px;
  height: 38.319px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
  border: ${props => (props.error ? '3px solid #CC1717' : 'none')};
  padding-left: 10px;
`

export const Label = styled.p`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: ${props => (props.error ? '8px' : '19px')};
  margin-bottom: 5px;
`

export const SignInLink = styled.p`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const ErrorMessage = styled.p`
  color: #cc1717;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 2px;
`
