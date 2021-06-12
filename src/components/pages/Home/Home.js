import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import homepageImage from '../../../assets/images/homepage-image.png'
import Button from '../../elements/Button'
import BackgroundWave from '../../elements/BackgroundWave'

const Home = () => {
  return (
    <HomeWrapper>
      <Message>
        <SmallMessage>Best online store of the year</SmallMessage>
        <BigMessage>We don't do fashion, we are fashion</BigMessage>
        <Link to="/products">
          <Button content="Shop now" type="big"></Button>
        </Link>
      </Message>
      <Image src={homepageImage} alt="people"></Image>
      <BackgroundWave />
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* hide footer */
  margin-bottom: 7rem;

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
  font-weight: bold;
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

export default Home
