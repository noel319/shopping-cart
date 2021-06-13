import React from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import ProductCard from './ProductCard'
import exampleProducts from '../../../assets/examples/exampleProducts'

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

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 36rem);
    justify-content: center;
    gap: 8rem;
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 40rem);
  }

  animation: fadeIn ease 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export default Products
