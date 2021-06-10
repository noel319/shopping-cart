import React from 'react'
import backgroundWave from '../../assets/background-wave.png'
import styled from 'styled-components'

const BackgroundWave = () => {
  return <BackgroundWaveWraper src={backgroundWave} alt="background image" />
}

const BackgroundWaveWraper = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
`

export default BackgroundWave
