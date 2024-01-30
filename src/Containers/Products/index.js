import React, { useEffect, useState } from 'react'

import LogoProducts from '../../assets/Logo-home-2.svg'
import { CardProducts } from '../../components/CardProducts'
import apiCodeBurger from '../../services/api'
import {
  CategoriesMenu,
  CategoryButton,
  Container,
  Productimg,
  ProductsContainer
} from './styles'

export function Products() {
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await apiCodeBurger.get('categories')
      const newCategories = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(newCategories)
    }
    async function loadProducts() {
      const { data } = await apiCodeBurger.get('products')

      setProducts(data)
    }
    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products)
    } else {
      const newFilteredProducts = products.filter(
        product => product.category_id === activeCategory
      )
      setFilteredProducts(newFilteredProducts)
    }
  }, [activeCategory, products])

  return (
    <Container>
      <Productimg src={LogoProducts} alt="logo da home-Products" />
      <CategoriesMenu>
        {categories &&
          categories.map(category => (
            <CategoryButton
              type="button"
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoriesMenu>
      <ProductsContainer>
        {filteredProducts &&
          filteredProducts.map(product => (
            <CardProducts key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </Container>
  )
}
