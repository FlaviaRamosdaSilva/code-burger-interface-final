import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow {
    background-color: #9758a6;
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: none;
  }
  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }
`

export const CategoryImg = styled.img``

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  width: 200px;
  border-radius: 10px;
`

export const Button = styled.button`
  margin-top: 16px;
  border-radius: 8px;
  background: #9758a6;
  box-shadow:
    0px 20px 40px 0px rgba(151, 88, 166, 0.24),
    0px 5px 10px 0px rgba(151, 88, 166, 0.22);
  height: 50px;
  border: none;
  color: var(--Theme-White, #fff);
  text-align: center;
  font-family: Roboto;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`

export const Name = styled.p`
  color: var(--Theme-Gray-800, #424242);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  margin-top: 16px;
`

export const Price = styled.p`
  color: var(--Theme-Gray-900, #212121);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  margin-top: 8px;
`
