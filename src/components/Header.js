import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>FakeStore</Logo>
      <Navbar />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 25rem;
  background-color: ${({ theme }) => theme.colors.dark};
`

const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 6rem;
`

export default Header
