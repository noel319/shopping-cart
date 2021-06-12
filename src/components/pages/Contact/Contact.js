import React from 'react'
import styled from 'styled-components'
import {
  FaGithub,
  FaFacebookMessenger,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa'

const Contact = () => {
  return (
    <ContactWrapper>
      <SocialMedia>
        <SocialLink href="https://github.com/michalosman" target="_blank">
          <FaGithub />
        </SocialLink>
        <SocialLink
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          <FaFacebookF />
        </SocialLink>
        <SocialLink
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          <FaFacebookMessenger />
        </SocialLink>
        <SocialLink
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          <FaTwitter />
        </SocialLink>
        <SocialLink
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          <FaInstagram />
        </SocialLink>
      </SocialMedia>
      <ContactInfo>
        <p>FakeStore</p>
        <p>Hollywood Boulevard 42, Los Angeles USA</p>
      </ContactInfo>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  /* hide footer */
  margin-bottom: 14.8rem;

  animation: fadeIn ease 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const SocialMedia = styled.div`
  display: flex;
  gap: 10rem;
  font-size: 10rem;
  margin-bottom: 10rem;

  @media (max-width: 1000px) {
    gap: 8rem;
    font-size: 8rem;
  }

  @media (max-width: 600px) {
    gap: 5rem;
    font-size: 5rem;
  }
`

const ContactInfo = styled.div`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5rem;

  @media (max-width: 600px) {
    font-size: 2.4rem;
  }
`

const SocialLink = styled.a`
  cursor: pointer;
  transition: transform 0.15s ease-in-out;
  color: ${({ theme }) => theme.colors.dark};

  &:hover {
    transform: scale(1.1);
  }
`

export default Contact
