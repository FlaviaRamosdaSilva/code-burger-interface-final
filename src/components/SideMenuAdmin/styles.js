import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background: #3c3c3c;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
  width: 300px;
  top: 0;
  left: 0;

  hr {
    margin: 50px 15px;
  }
`

export const ContainerItem = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  background: ${props => (props.isActive ? '#565656' : 'none')};
  border-radius: 2px;
  margin: 8px;
  padding-left: 15px;

  .icon {
    color: #ffffff;
    margin-right: 9px;
  }
`

export const ListLink = styled(Link)`
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  line-height: 19px;
  color: #ffffff;
  text-decoration: none;
`
