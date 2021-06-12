import React from 'react'
import styled from 'styled-components'
import { FaMinus, FaPlus } from 'react-icons/fa'
import Button from '../elements/Button'

const CartItem = ({ name, price, image }) => {
  return (
    <CartItemWrapper>
      <Image src={image}></Image>
      <Details>
        <div>{name}</div>
        <div>{price}</div>
        <AmountChanger>
          <Button content={<FaMinus />} color="grey" animation="color"></Button>
          <div>1</div>
          <Button content={<FaPlus />} color="grey" animation="color"></Button>
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
