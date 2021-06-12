import React from 'react'
import Button from '../../elements/Button'
import styled from 'styled-components'

const ProductCard = ({ image, name, price }) => {
  return (
    <ProductCardWrapper>
      <img src={image} alt={name}></img>
      <div>{name}</div>
      <div>{price}</div>
      <Button
        content="Add to cart"
        color="primary"
        hoverEffect="color"
        fullWidth
      />
    </ProductCardWrapper>
  )
}

const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 5rem;
  background-color: ${({ theme }) => theme.colors.grey.main};
  font-size: 2.4rem;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`

export default ProductCard
