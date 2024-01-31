import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'
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

export function Products({ location: { state } }) {
  let categoryId = 0
  if (state?.categoryId) {
    // utilizado o ponto de interrogação como um ElVES OPERATOR = operador que verifica se a infomação existe, se não existir ele segue a vida
    categoryId = state.categoryId // ElVES OPERATOR = se não existir o state, ele segue o fluxo e não quebra a aplicação
  }

  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState(categoryId)
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

Products.propTypes = {
  location: PropTypes.object
}
