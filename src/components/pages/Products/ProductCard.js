import React from 'react'
import styled from 'styled-components'
import Button from '../../elements/Button'

const ProductCard = ({ image, title, price }) => {
  return (
    <ProductCardWrapper>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <Details>
        <Info>
          <Title>{title}</Title>
          <div>{price}</div>
        </Info>
        <Button
          content="Add to cart"
          size="wide"
          color="dark"
          animation="color"
        />
      </Details>
    </ProductCardWrapper>
  )
}

const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.grey.main};
  border-radius: 10px;
  background-color: #fff;
  font-size: 2rem;
`

const Image = styled.img`
  height: 100%;
  width: auto;
`

const ImageContainer = styled.div`
  height: 25rem;
  padding: 3rem;
  margin: 0 auto;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.grey.main};
  gap: 2rem;
  padding: 2rem;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  height: 100%;
`

const Title = styled.div`
  font-weight: bold;
`

export default ProductCard
