import React from 'react'
import styled from 'styled-components'
import Button from '../elements/Button'
import { FaMinus, FaPlus } from 'react-icons/fa'

const CartItem = ({ name, price, image }) => {
  return (
    <CartItemWrapper>
      <Image src={image}></Image>
      <Info>
        <p>{name}</p>
        <p>{price}</p>
        <AmountChanger>
          <Button content={<FaMinus />} type="decrement"></Button>
          <Amount>1</Amount>
          <Button content={<FaPlus />} type="increment"></Button>
        </AmountChanger>
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
  width: 14rem;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`

const AmountChanger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`

const Amount = styled.div``

export default CartItem
