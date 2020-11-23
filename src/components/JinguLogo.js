import React from 'react'
import styled from 'styled-components'

import logo from '../assets/jingu-logo-512.png';
import {adaptiveHeightMobile, adaptiveWidthWeb} from "../mixin";

const Logo = styled.img`
  border-radius: 100vmax;
  @media (min-width: 800px) and (min-height: 900px) {
    position: absolute;
    top: 13.4vh;
    left: 76vw;
    
    width: ${adaptiveWidthWeb(120, 210)};
  }
  
  @media (max-width: 800px), (max-height: 900px) {
    position: static;
    top: auto;
    left: auto;
    
    width: ${adaptiveHeightMobile(130, 210)};
  }
`

export default function JinguLogo() {
  return (
    <Logo src={logo} alt="logo" />
  )
}
