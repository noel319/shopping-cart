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
  justify-content: center;
  padding: 4rem 0;
  gap: 30rem;
  background-color: ${({ theme }) => theme.colors.dark};

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 4rem;
  }
`

const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 6rem;
`

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2.4rem;
  width: 80rem;

  @media (max-width: 600px) {
    width: 60rem;
  }

  @media (max-width: 450px) {
    width: 50rem;
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
