import React from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard'
import exampleProducts from '../../../assets/exampleProducts'
import { v4 as uuidv4 } from 'uuid'

const Products = () => {
  const productCards = exampleProducts.map((product) => (
    <ProductCard
      key={uuidv4()}
      name={product.name}
      price={product.price}
      image={product.image}
    />
  ))

  return <ProductsWrapper>{productCards}</ProductsWrapper>
}

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15rem;
  width: 100%;
`

export default Products
