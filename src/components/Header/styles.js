import styled from 'styled-components'

export const Container = styled.div`
  height: 72px;
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  box-shadow: 2px 3px 5px 0px rgba(0, 0, 0, 0.15);
`

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => (props.isActive ? '#ff6600' : '#555')};
  font-size: 16px;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
`

export const ContainerText = styled.div`
  p {
    color: #555;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`

export const Line = styled.div`
  height: 40px;
  border: 0.5px solid #bababa;
`

export const PageLinkExit = styled.a`
  width: 25.3px;
  color: #ff6600;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`
