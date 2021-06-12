import React from 'react'
import styled from 'styled-components'
import Button from '../elements/Button'
import CartItem from './CartItem'
import exampleProducts from '../../assets/exampleProducts'
import { v4 as uuidv4 } from 'uuid'
import {FaTimesCircle} from 'react-icons/fa'

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
        <Button content={<FaTimesCircle/>} type='close'/>
        Your shopping cart
        <Products>{products}</Products>
        <TotalCost>Total: $179.91</TotalCost>
        <Button content="Checkout" type="primary" />
      </CartWrapper>
      <Overlay />
    </>
  )
}

//need to darken the whole page

const CartWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
  height: 100%;
  width: 59rem;
  padding: 6rem;
  background-color: ${({ theme }) => theme.colors.grey.light};
  font-size: 3rem;
  /* footer support to make cart look consistent */
  padding-bottom: 11.2rem;
  /* overlay support */
  z-index: 1;
`

const Products = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  gap: 3rem;
  width: 100%;
`

const TotalCost = styled.div`
  font-weight: bold;
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
