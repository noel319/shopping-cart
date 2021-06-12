import React from 'react'
import styled, { css } from 'styled-components'

const Button = ({ content, type }) => {
  return <ButtonWrapper type={type}>{content}</ButtonWrapper>
}

const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 50px;
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  /* PRIMARY BUTTON */
  ${(props) =>
    props.type === 'primary' &&
    css`
      width: 100%;
      padding: 1rem;
      border-radius: 0px;
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.dark};
      font-weight: bold;
      transition: background-color 0.15s ease-in-out;

      &:hover {
        background-color: #35eec2;
        transform: scale(1);
      }

      &:active {
        background-color: #24ddb1;
        transition: background-color 0.05s ease-in-out;
      }
    `}

  /* CLOSE BUTTON */
  ${(props) =>
    props.type === 'close' &&
    css`
      width: 100%;
      padding: 1rem;
      border-radius: 0px;
      background-color: #ff9999;
      color: ${({ theme }) => theme.colors.dark};
      font-weight: bold;
      transition: background-color 0.15s ease-in-out;

      &:hover {
        background-color: #ee8888;
        transform: scale(1);
      }

      &:active {
        background-color: #dd7777;
        transition: background-color 0.05s ease-in-out;
      }
    `}

  /* BIG BUTTON */
  ${(props) =>
    props.type === 'big' &&
    css`
      width: 39rem;
      background-color: ${({ theme }) => theme.colors.dark};
      color: ${({ theme }) => theme.colors.light};
      font-size: 4rem;
      font-weight: bold;
    `}

    /* AMOUNT CHANGER BUTTON */
    ${(props) =>
    (props.type === 'increment') | (props.type === 'decrement') &&
    css`
      padding: 1rem;
      border-radius: 0px;
      background-color: ${({ theme }) => theme.colors.grey.main};
      color: ${({ theme }) => theme.colors.dark};
      transition: background-color 0.15s ease-in-out;

      &:hover {
        background-color: #d4d4d4;
        transform: scale(1);
      }

      &:active {
        background-color: #c3c3c3;
        transition: background-color 0.05s ease-in-out;
      }
    `}
`

export default Button
