import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from './Button'
import { FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
  return (
    <NavbarWrapper>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/products">Products</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
      <Button content={<FaShoppingCart />}></Button>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 12rem;
  font-size: 3rem;
`

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.light};
`

export default Navbar
