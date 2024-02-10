import styled from 'styled-components'
import { Button } from '../../../components'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;

  form {
    background-color: #565656;
    border-radius: 10px;
    padding: 30px;

    .sc-hIPBNq {
      margin-bottom: 25px;
    }
  }
`

export const Label = styled.p`
  font-size: 16px;
  color: #fff;
  margin-bottom: 4px;
  margin-top: 25px;
`

export const Input = styled.input`
  height: 40px;
  background: #fff;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: none;
  width: 100%;
  min-width: 280px;
  padding: 10px;
  font-size: 16px;
`

export const ButtonStyle = styled(Button)`
  margin-top: 25px;
  width: 100%;
`

export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px dashed #fff;
  border-radius: 5px;
  padding: 10px;
  margin-top: 25px;

  input {
    opacity: 0;
    width: 1px;
  }
`

export const ContainerInput = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;

  input {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`
