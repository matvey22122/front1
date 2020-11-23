import React from 'react'
import styled from 'styled-components'

const Smile = styled.span`
  position: absolute;
  left: 13vw;
  top: 37vh;
  
  font-style: normal;
  font-weight: 500;
  
  font-size: 10.7vw;
  width: 10.7vw;
  
  @media (min-width: 1920px) {
    font-size: 205px;
    width: 205px;
  }
  
  @media (max-width: 1000px) {
    position: static;
    top: auto;
    left: auto;
  }
  
  @media (max-width: 700px), (max-height: 900px) {
    width: 21vw;
    font-size: 21vw;
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
