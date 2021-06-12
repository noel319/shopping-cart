import React from 'react'
import styled from 'styled-components'
import Button from '../elements/Button'
import { FaMinus, FaPlus } from 'react-icons/fa'

const CartItem = ({ name, price, image }) => {
  return (
    <CartItemWrapper>
      <Image src={image}></Image>
      <Details>
        <div>{name}</div>
        <div>{price}</div>
        <AmountChanger>
          <Button content={<FaMinus />} type="decrement"></Button>
          <div>1</div>
          <Button content={<FaPlus />} type="increment"></Button>
        </AmountChanger>
      </Details>
    </CartItemWrapper>
  )
}

const CartItemWrapper = styled.div`
  display: flex;
`

const Image = styled.img`
  width: 14rem;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 2rem;
`

const AmountChanger = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`

export default CartItem
