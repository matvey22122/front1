import React from 'react'
import styled from 'styled-components'

import logo from './jingu-logo-512.png';

const Logo = styled.img`
  position: absolute;
  top: 13.4vh;
  left: 76vw;
  
  width: 11vw;
  min-width: 130px;
  border-radius: 6vw;
  
  @media (max-width: 1000px) {
    position: relative;
    top: auto;
    left: auto;
    
    width: 56vw;
    max-width: 240px;
    border-radius: 100vw;
  }
`

export default function JinguLogo() {
  return (
    <Logo src={logo} alt="logo" />
  )
}
