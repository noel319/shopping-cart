import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import Button from './elements/Button'

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>FakeStore</Logo>
      <Navbar>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/products">Products</NavbarLink>
        <NavbarLink to="/contact">Contact</NavbarLink>
        <Button content={<FaShoppingCart />}></Button>
      </Navbar>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 25rem;
  background-color: ${({ theme }) => theme.colors.dark};

  @media (max-width: 1630px) {
    flex-direction: column;
    gap: 5rem;
  }
`

const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 6rem;
`

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  gap: 12rem;
  font-size: 2.4rem;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 5rem;
  }
`

const NavbarLink = styled(Link)`
  color: ${({ theme }) => theme.colors.light};
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`

export default Header
