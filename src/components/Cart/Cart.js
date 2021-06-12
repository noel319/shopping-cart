import React from 'react'
import styled from 'styled-components'
import Button from '../elements/Button'
import CartItem from './CartItem'
import exampleProducts from '../../assets/exampleProducts'
import { v4 as uuidv4 } from 'uuid'

const Cart = () => {
  const products = exampleProducts.map((product) => (
    <CartItem
      key={uuidv4()}
      name={product.name}
      price={product.price}
      image={product.image}
    ></CartItem>
  ))

  return (
    <>
      <CartWrapper>
        <Title>Your shopping cart</Title>
        <Products>{products}</Products>
        <div>Total: $179.91</div>
        <Button
          content="Checkout"
          color="primary"
          hoverEffect="color"
          fullWidth
        />
        <Button content="Close" color="red" hoverEffect="color" fullWidth />
      </CartWrapper>
      <Overlay />
    </>
  )
}

const CartWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  height: 100%;
  width: 59rem;
  padding: 6rem;
  background-color: ${({ theme }) => theme.colors.grey.light};
  font-size: 3rem;
  font-weight: bold;
  /* overlay support */
  z-index: 1;
`

const Title = styled.div`
  font-size: 4rem;
  margin-bottom: 2rem;
`

const Products = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  gap: 3rem;
  width: 100%;
  height: 45rem;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100%;
  background-color: black;
  opacity: 0.5;
`

export default Cart
