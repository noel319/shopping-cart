import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Button = ({ onClick, content, shape, size, color, animation }) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      size={size}
      shape={shape}
      color={color}
      animation={animation}
    >
      {content}
    </ButtonWrapper>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  shape: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  animation: PropTypes.string,
}

const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-weight: bold;

  /* SIZE */

  ${({ size }) =>
    size === 'big' &&
    css`
      width: 39rem;
      font-size: 4rem;
    `}

  ${({ size }) =>
    size === 'wide' &&
    css`
      width: 100%;
    `}

  /* SHAPE */

  ${({ shape }) =>
    shape === 'round' &&
    css`
      padding: 2rem;
      border-radius: 50px;
    `}

  /* COLOR */

  ${({ color }) =>
    color === 'primary' &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.dark};
    `}

  ${({ color }) =>
    color === 'red' &&
    css`
      background-color: ${({ theme }) => theme.colors.red};
      color: ${({ theme }) => theme.colors.dark};
    `}

  ${({ color }) =>
    color === 'grey' &&
    css`
      background-color: ${({ theme }) => theme.colors.grey.main};
      color: ${({ theme }) => theme.colors.dark};
    `}

  ${({ color }) =>
    color === 'dark' &&
    css`
      background-color: ${({ theme }) => theme.colors.dark};
      color: ${({ theme }) => theme.colors.light};
    `}

  /* ANIMATION */

  ${({ animation }) =>
    animation === 'scale' &&
    css`
      transition: transform 0.15s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }

      &:active {
        transform: scale(1.02);
      }
    `}

  ${({ animation }) =>
    animation === 'color' &&
    css`
      transition: background-color 0.15s ease-in-out;

      ${({ color }) =>
        color === 'primary' &&
        css`
          &:hover {
            background-color: ${({ theme }) => theme.colors.hover.primary};
          }

          &:active {
            background-color: ${({ theme }) => theme.colors.active.primary};
            transition: background-color 0.05s ease-in-out;
          }
        `}

      ${({ color }) =>
        color === 'red' &&
        css`
          &:hover {
            background-color: ${({ theme }) => theme.colors.hover.red};
          }

          &:active {
            background-color: ${({ theme }) => theme.colors.active.red};
            transition: background-color 0.05s ease-in-out;
          }
        `}

        ${({ color }) =>
        color === 'grey' &&
        css`
          &:hover {
            background-color: ${({ theme }) => theme.colors.hover.grey};
          }

          &:active {
            background-color: ${({ theme }) => theme.colors.active.grey};
            transition: background-color 0.05s ease-in-out;
          }
        `}

        ${({ color }) =>
        color === 'dark' &&
        css`
          &:hover {
            background-color: ${({ theme }) => theme.colors.hover.dark};
          }

          &:active {
            background-color: ${({ theme }) => theme.colors.active.dark};
            transition: background-color 0.05s ease-in-out;
          }
        `}
    `}
`

export default Button
