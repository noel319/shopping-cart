import React, { useEffect } from 'react'
import styled from 'styled-components'
import ProductCard from './Products/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../../state/actions/products'
import { v4 as uuidv4 } from 'uuid';

const Products = () => {
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()

  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    let data = await response.json()
    return data
  }

  const filterProducts = (products) => {
    return products.filter(
      (product) =>
        product.category === `men's clothing` ||
        product.category === `women's clothing`
    )
  }

  useEffect(() => {
    const loadProducts = async () => {
      dispatch(setProducts(filterProducts(await fetchProducts())))
    }
    loadProducts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const productCards = products.map((product) => (
    <ProductCard
      key={uuidv4()}
      id={product.id}
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
  margin: 0 auto;
  margin-top: 8rem;
  margin-bottom: 13.2rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 110rem;
    padding: 0 4rem;
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 80rem;
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 40rem;
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
