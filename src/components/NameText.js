import React from 'react'
import styled from 'styled-components'
import {adaptiveHeightMobile, adaptiveWidthWeb} from "../mixin";

const NameSurname = styled.span`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 300;
  text-align: center;
  
  @media (min-width: 800px) and (min-height: 900px) {
    position: absolute;
    top: 16vh;
    left: 13vw;
    
    font-size: ${adaptiveWidthWeb(40, 114.894)};
    line-height: ${adaptiveWidthWeb(50, 135)};
  }
  
  @media (max-width: 800px), (max-height: 900px) {
    position: static;
    top: auto;
    left: auto;
    
    font-size: ${adaptiveHeightMobile(30, 40)};
    line-height: ${adaptiveHeightMobile(27, 47)};
  }
`


export default function NameText() {
  return (
    <NameSurname>Матвей Карпов</NameSurname>
  )
}
