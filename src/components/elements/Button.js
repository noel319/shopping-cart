import React from 'react'
import styled, { css } from 'styled-components'

const Button = ({ content, type }) => {
  return <ButtonWrapper type={type}>{content}</ButtonWrapper>
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

  /* MESSAGE BUTTON */
  ${(props) =>
    props.type === 'messageBtn' &&
    css`
      width: 39rem;
      background-color: ${({ theme }) => theme.colors.dark};
      color: ${({ theme }) => theme.colors.light};
      font-size: 4rem;
      font-weight: bold;
    `}
`

export default Button
