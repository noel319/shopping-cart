import React from 'react'
import styled from 'styled-components'
import backgroundWave from '../../assets/images/background-wave.png'

const BackgroundWave = () => {
  return <BackgroundWaveWrapper src={backgroundWave} alt="background wave" />
}

const BackgroundWaveWrapper = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -100;
`

export default BackgroundWave
