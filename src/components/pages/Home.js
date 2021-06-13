import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import homepageImage from '../../assets/images/homepage-image.png'
import underline from '../../assets/images/underline.png'
import Button from '../elements/Button'

const Home = () => {
  return (
    <HomeWrapper>
      <Message>
        <SmallMessage>Best online store of the year</SmallMessage>
        <BigMessage>We don't do fashion, we are fashion</BigMessage>
        <Underline src={underline} alt="underline image" />
        <Link to="/products">
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
  gap: 6rem;
  margin-top: 12rem;
  margin-bottom: 24rem;
  animation: fadeIn ease 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 1100px) {
    align-items: center;
    justify-content: center;
  }
`

const Message = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1100px) {
    align-items: center;
    width: 50rem;
  }
`

const SmallMessage = styled.div`
  color: ${({ theme }) => theme.colors.grey.dark};
  font-size: 1.9rem;
  font-weight: bold;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
`

const BigMessage = styled.div`
  font-size: 6.4rem;
  font-weight: bold;

  @media (max-width: 1100px) {
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

  @media (max-width: 1100px) {
    display: none;
  }
`

const Image = styled.img`
  max-width: 80rem;

  @media (max-width: 1100px) {
    position: absolute;
    z-index: -1;
    opacity: 0.3;
  }

  @media (max-width: 650px) {
    width: 58rem;
  }

  @media (max-width: 450px) {
    width: 48rem;
  }
`

export default Home
