import React from 'react'
import styled from 'styled-components'
import { FaMinus, FaPlus } from 'react-icons/fa'
import Button from '../elements/Button'
import { addToCart, removeFromCart } from '../../state/actions'
import { useDispatch } from 'react-redux'

const CartItem = ({ id, title, price, image, quantity }) => {
  const cartItem = { id, title, price, image, quantity }
  const dispatch = useDispatch()

  const formatTitle = (title) => {
    return title.length <= 14 ? title : title.substr(0, 14) + '...'
  }

  return (
    <CartItemWrapper>
      <ImageContainer>
        <Image src={image}></Image>
      </ImageContainer>
      <Details>
        <Title>{formatTitle(title)}</Title>
        <div>${price}</div>
        <AmountChanger>
          <Button
            onClick={() => dispatch(removeFromCart(cartItem))}
            content={<FaMinus />}
            color="grey"
            animation="color"
          ></Button>
          <div>{cartItem.quantity}</div>
          <Button
            onClick={() => dispatch(addToCart(cartItem))}
            content={<FaPlus />}
            color="grey"
            animation="color"
          ></Button>
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
