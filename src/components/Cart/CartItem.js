import React from 'react'
import styled from 'styled-components'
import Button from '../elements/Button'

const CartItem = ({ name, price, image }) => {
  return (
    <CartItemWrapper>
      <Image src={image}></Image>
      <Info>
        <p>{name}</p>
        <p>{price}</p>
        <Amount></Amount>
      </Info>
    </CartItemWrapper>
  )
}

const CartItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
`

const Image = styled.img`
  width: 12rem;
`

const Info = styled.div`
  width: 100%;
  text-align: center;
`

const Amount = styled.div``

export default CartItem
