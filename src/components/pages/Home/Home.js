import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import homepageImage from '../../../assets/images/homepage-image.png'
import Button from '../../elements/Button'
import backgroundWave from '../../../assets/images/background-wave.png'

const Home = () => {
  return (
    <HomeWrapper>
      <Message>
        <SmallMessage>Best online store of the year</SmallMessage>
        <BigMessage>We don't do fashion, we are fashion</BigMessage>
        <Link to="/products">
          <Button content="Shop now" type="messageBtn"></Button>
        </Link>
      </Message>
      <Image src={homepageImage} alt="people"></Image>
      <BackgroundWave src={backgroundWave} alt="background" />
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 1000px) {
    justify-content: center;
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
  letter-spacing: 0.5rem;
  text-transform: uppercase;
`

const BigMessage = styled.div`
  margin-bottom: 3rem;
  font-size: 6.4rem;
  font-weight: bold;

  @media (max-width: 1000px) {
    text-align: center;
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

const BackgroundWave = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -100;
`

export default Home
