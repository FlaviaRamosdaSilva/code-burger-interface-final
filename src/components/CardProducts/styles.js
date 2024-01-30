import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 30px 60px 0px rgba(57, 57, 57, 0.1);
  display: flex;
  gap: 16px;
  height: 180px;
  width: 400px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: 10px;
  }
`

export const Image = styled.img`
  width: 160px;
  border-radius: 10px;
  margin: 15px;
`
export const ProductName = styled.p`
  color: #000;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const ProductPrice = styled.p`
  color: #000;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 30px;
`
