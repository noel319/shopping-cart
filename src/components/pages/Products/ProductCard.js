import React from 'react'
import Button from '../../elements/Button'
import styled from 'styled-components'

const ProductCard = ({ image, name, price }) => {
  return (
    <ProductCardWrapper>
      <Image src={image}></Image>
      <Name>{name}</Name>
      <Price>{price}</Price>
      <Button content="Add to cart" type="primary" />
    </ProductCardWrapper>
  )
}

const ProductCardWrapper = styled.div`
  width: 36rem;
  padding: 4rem;
  background-color: ${({ theme }) => theme.colors.grey.main};
`

const Image = styled.img``

const Name = styled.div``

const Price = styled.div``

export default ProductCard
