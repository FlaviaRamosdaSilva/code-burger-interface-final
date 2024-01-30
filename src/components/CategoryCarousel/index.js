import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import CategoryName from '../../assets/CategoryName.png'
import apiCodeBurger from '../../services/api'
import { Button, CategoryImg, Container, ContainerItens, Image } from './styles'

export function CategoryCarousel() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await apiCodeBurger.get('categories')
      console.log(data)
      setCategories(data)
    }
    loadCategories()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <CategoryImg src={CategoryName} alt="logo da Categoria" />
      <Carousel
        itemsToShow={5}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {categories &&
          categories.map(category => (
            <ContainerItens key={category.id}>
              <Image src={category.url} alt="foto da categoria" />
              <Button>{category.name}</Button>
            </ContainerItens>
          ))}
      </Carousel>
    </Container>
  )
}
