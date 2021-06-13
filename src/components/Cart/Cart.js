import React from 'react'
import styled, { css } from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { useSelector, useDispatch } from 'react-redux'
import Button from '../elements/Button'
import CartItem from './CartItem'
import exampleProducts from '../../assets/examples/exampleProducts'
import { closeCart } from '../../state/actions'

const Cart = () => {
  const isCartOpen = useSelector((state) => state.isCartOpen)
  const dispatch = useDispatch()

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
      <CartWrapper isOpen={isCartOpen}>
        <Title>Your shopping cart</Title>
        <Products>{products}</Products>
        <div>Total: $179.91</div>
        <Button
          content="Checkout"
          size="wide"
          color="primary"
          animation="color"
        />
        <Button
          onClick={() => dispatch(closeCart())}
          content="Close"
          size="wide"
          color="red"
          animation="color"
        />
      </CartWrapper>
      <Overlay onClick={() => dispatch(closeCart())} isOpen={isCartOpen} />
    </>
  )
}

const CartWrapper = styled.div`
  position: fixed;
  top: 0;
  right: -110%;
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
  transition: right 0.85s ease-in-out;
  z-index: 1;

  ${({ isOpen }) =>
    isOpen &&
    css`
      right: 0;
    `}

  @media (max-width: 500px) {
    width: 100%;
  }
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
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.6;
  transition: left 0.85s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      left: 0;
    `}
`

export default Cart
