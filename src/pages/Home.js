import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import homepageImage from '../assets/images/homepage-image.png'
import underline from '../assets/images/underline.png'
import Button from '../components/elements/Button'
import routes from '../constants/routes.json'

const Home = () => {
  return (
    <HomeWrapper>
      <Message>
        <SmallMessage>Best online store of the year</SmallMessage>
        <BigMessage>We don't do fashion, we are fashion</BigMessage>
        <Underline src={underline} alt="underline image" />
        <Link to={routes.PRODUCTS}>
          <Button
            content="Shop now"
            size="big"
            shape="round"
            color="dark"
            animation="scale"
          ></Button>
        </Link>
      </Message>
      <Image src={homepageImage} alt="people"></Image>
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 6rem;
  margin-bottom: 20rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`

const Message = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;

  animation: fadeIn ease 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 1024px) {
    align-items: center;
  }
`

const SmallMessage = styled.div`
  color: ${({ theme }) => theme.colors.grey.dark};
  font-size: 1.9rem;
  font-weight: bold;
  letter-spacing: 0.5rem;
  text-transform: uppercase;

  @media (max-width: 450px) {
    font-size: 1.4rem;
  }
`

const BigMessage = styled.div`
  font-size: 6.4rem;
  font-weight: bold;

  @media (max-width: 1024px) {
    text-align: center;
    margin-bottom: 3rem;
  }

  @media (max-width: 450px) {
    font-size: 5rem;
  }
`

const Underline = styled.img`
  width: 25rem;
  margin-top: -1rem;
  margin-bottom: 3rem;

  @media (max-width: 1024px) {
    display: none;
  }
`

const Image = styled.img`
  width: 75rem;
  animation: fadeIn ease 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: -1;
    width: 100%;
    opacity: 0.4;
    animation: none;
  }

  @media (max-width: 600px) {
    top: 25rem;
  }
`

export default Home
