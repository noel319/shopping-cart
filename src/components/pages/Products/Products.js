import React from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard'
import exampleProducts from '../../../assets/examples/exampleProducts'

const Products = () => {
  const fetchProducts = async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    let products = await data.json()
    return products
  }

  const formatProductsData = (products) => {
    return products.filter(
      (product) =>
        product.category === `men's clothing` ||
        product.category === `women's clothing`
    )
  }

  const checkData = async () => {
    console.log(formatProductsData(await fetchProducts()))
  }

  checkData()

  const productCards = exampleProducts.map((product) => (
    <ProductCard
      key={product.id}
      title={product.title}
      price={product.price}
      image={product.image}
    />
  ))

  return <ProductsWrapper>{productCards}</ProductsWrapper>
}

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;
  margin-top: 8rem;
  margin-bottom: 13.2rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 4rem;
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 36rem);
    justify-content: center;
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
