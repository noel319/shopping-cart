import React from 'react'
import styled from 'styled-components'
import { FaMinus, FaPlus } from 'react-icons/fa'
import Button from '../elements/Button'

const CartItem = ({ title, price, image }) => {
  const formatTitle = (title) => {
    const words = title.split(' ')
    let result = ''
    if (words.length < 3) {
      return title
    }
    for (let i = 0; i < 3; i++) {
      result += words[i] + ' '
    }
    if (words.length > 3) {
      result += '...'
    }
    return result
  }

  return (
    <CartItemWrapper>
      <ImageContainer>
        <Image src={image}></Image>
      </ImageContainer>
      <Details>
        <Title>{formatTitle(title)}</Title>
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
  height: 100%;
  width: auto;
`

const ImageContainer = styled.div`
  height: 13rem;
  width: 20%;
  margin: auto;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 2rem;
`

const Title = styled.div`
  font-weight: bold;
  height: 3rem;
  overflow: hidden;
`

const AmountChanger = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`

export default CartItem
