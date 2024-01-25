import React, { useEffect } from 'react'

import CategoryName from '../../assets/CategoryName.png'
import apiCodeBurger from '../../services/api'
import { CategoryImg, Container } from './styles'

function CategoryCarousel() {
  useEffect(() => {
    async function loadCategories() {
      const response = await apiCodeBurger.get('categories')
    }
    loadCategories()
  }, [])
  return (
    <Container>
      <CategoryImg src={CategoryName} alt="Categoria" />
    </Container>
  )
}

export default CategoryCarousel
