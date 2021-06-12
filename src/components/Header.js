import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import Button from './elements/Button'
import { openCart } from '../state/actions'
import { useDispatch } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()

  return (
    <HeaderBackground>
      <HeaderWrapper>
        <Link to="/">
          <Logo>FakeStore</Logo>
        </Link>
        <Navbar>
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/products">Products</NavbarLink>
          <NavbarLink to="/contact">Contact</NavbarLink>
          <Button
            onClick={() => dispatch(openCart())}
            content={<FaShoppingCart />}
            shape="round"
            animation="scale"
          ></Button>
        </Navbar>
      </HeaderWrapper>
    </HeaderBackground>
  )
}

const HeaderBackground = styled.header`
  background-color: ${({ theme }) => theme.colors.dark};
`

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.widths.content};
  padding: 4rem 0;
  margin: 0 auto;

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
