import React from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard'
import exampleProducts from '../../../assets/examples/exampleProducts'
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
  gap: 12rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 40rem);
    justify-content: center;
    gap: 8rem;
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 40rem);
  }
`

export default Products
