import React from 'react'
import styled from 'styled-components'

import logo from '../assets/jingu-logo-512.png';

const Logo = styled.img`
  position: absolute;
  top: 13.4vh;
  left: 76vw;
  
  width: 11vw;
  min-width: 130px;
  border-radius: 6vw;
  
  @media (max-width: 1000px) {
    position: static;
    top: auto;
    left: auto;
    
    width: 25vw;
    max-width: 200px;
    border-radius: 100vw;
  }
  
  @media (max-width: 700px), (max-height: 900px) {
    width: 56vw;
  }
`

export default function JinguLogo() {
  return (
    <Logo src={logo} alt="logo" />
  )
}
