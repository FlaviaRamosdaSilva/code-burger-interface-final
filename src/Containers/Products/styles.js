import styled from 'styled-components'

export const Container = styled.div`
  background: #efefef;
  min-height: calc(100vh - 72px);
`

export const Productimg = styled.img`
  width: 100%;
`
export const CategoryButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: ${props => (props.isActiveCategory ? '#9758a6' : '#9a9a9d')};
  border-bottom: ${props => props.isActiveCategory && '2px solid #9758a6'};
  box-shadow: ${props =>
    props.isActiveCategory
      ? '0px 4px 4px 0px rgba(195, 63, 21, 0.10)'
      : 'none'};
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 5px;
`
export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;
`
export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 20px;
  padding: 40px;
  justify-items: center;
  width: 100%;
  margin-top: 20px;
`
