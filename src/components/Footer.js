import React from 'react'
import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'
import backgroundWave from '../assets/images/background-wave.png'

const Footer = () => {
  return (
    <FooterWrapper>
      Copyright © 2021 michalosman
      <GithubLink href="https://github.com/michalosman" target="_blank">
        <FaGithub />
      </GithubLink>
      <BackgroundWave src={backgroundWave}/>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;
  font-size: 2rem;
`

const GithubLink = styled.a`
  display: flex;
  margin-left: 1rem;
  color: ${({ theme }) => theme.colors.dark};
  font-size: 2rem;
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`

const BackgroundWave = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
`

export default Footer
