import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import Button from './elements/Button'
import { openCart } from '../state/actions'

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

  @media (max-width: 1100px) {
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
  width: 81rem;
  font-size: 2.4rem;

  @media (max-width: 650px) {
    width: 59rem;
  }

  @media (max-width: 450px) {
    width: 48rem;
  }
`

const NavbarLink = styled(Link)`
  padding: 1rem;
  color: ${({ theme }) => theme.colors.light};
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`

export default Header
