import React from 'react'
import styled from 'styled-components'
import {adaptiveHeightMobile, adaptiveWidthWeb} from "../mixin";

const Smile = styled.span`
  font-style: normal;
  font-weight: 500;
  
  @media (min-width: 800px) and (min-height: 900px) {
    position: absolute;
    left: 13vw;
    top: 37vh;
    
    font-size: ${adaptiveWidthWeb(60, 170)};
    line-height: ${adaptiveWidthWeb(1, 240)};
  }
  
  @media (max-width: 800px), (max-height: 900px) {
    position: static;
    top: auto;
    left: auto;
    
    font-size: ${adaptiveHeightMobile(50, 70)};
    line-height: ${adaptiveHeightMobile(50, 94)};
  }
    
  ::after {
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  
  ::after {
     content: '⏳';
    --emoji: '⌛️';
    animation-name: twoFrames;
    animation-duration: 1.2s;
  }
    
  @keyframes twoFrames {
    50% {
      content: var(--emoji);
    }
  }
`

export default function Emoji() {
  return (
    <Smile/>
  )
}
