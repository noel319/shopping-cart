import React from 'react'
import styled from 'styled-components'

const Button = ({ content }) => {
  return <ButtonWrapper>{content}</ButtonWrapper>
}

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 50px;
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`

export default Button
