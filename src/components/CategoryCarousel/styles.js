import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow {
    background-color: #ff6600;
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: none;
  }
  .rec.rec-arrow:hover {
    border: 2px solid #ff6600;
    background-color: #efefef;
    color: #ff6600;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }

  .boxZgq {
    background-color: #ff6600;
    box-shadow: 0 0 1px 3px rgba(255, 102, 0, 1);
  }
`

export const CategoryImg = styled.img`
  @media (max-width: 512px) {
    width: 100vw;
  }
`

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  width: 200px;
  border-radius: 10px;
`

export const Button = styled(Link)`
  margin-top: 16px;
  border-radius: 8px;
  background: #ff6600;
  box-shadow:
    0px 20px 40px 0px rgba(255, 102, 0, 1),
    0px 5px 10px 0px rgba(255, 102, 0, 1);
  height: 50px;
  border: none;
  color: var(--Theme-White, #fff);
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`
