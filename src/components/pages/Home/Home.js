import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import homepageImage from '../../../assets/images/homepage-image.png'
import underline from '../../../assets/images/underline.png'
import Button from '../../elements/Button'

const Home = () => {
  return (
    <HomeWrapper>
      <Message>
        <SmallMessage>Best online store of the year</SmallMessage>
        <BigMessage>We don't do fashion, we are fashion</BigMessage>
        <Underline src={underline} />
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
  align-items: flex-start;
  justify-content: space-between;
  /* hide footer */
  margin-bottom: 7rem;

  @media (max-width: 1000px) {
    align-items: center;
    justify-content: center;
  }

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

const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50rem;

  @media (max-width: 1000px) {
    align-items: center;
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

  @media (max-width: 1000px) {
    text-align: center;
    margin-bottom: 3rem;
  }
`

const Underline = styled.img`
  width: 25rem;
  margin-top: -1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 1000px) {
    display: none;
  }
`

const Image = styled.img`
  max-width: 80rem;

  @media (max-width: 1000px) {
    position: absolute;
    z-index: -1;
    opacity: 0.3;
  }

  @media (max-width: 600px) {
    max-width: 60rem;
  }
`

export default Home
