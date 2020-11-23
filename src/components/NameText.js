import React from 'react'
import styled from 'styled-components'

const NameSurname = styled.span`
  position: absolute;
  top: 16vh;
  left: 13vw;
  
  font-family: 'Roboto', sans-serif;
  font-size: 6vw;
  font-style: normal;
  font-weight: 300;
  line-height: 7vw;
  text-align: center;
  
  @media (min-width: 2200px) {
  font-size: 150px;
  }
  
  @media (max-width: 1000px) {
    position: static;
    top: auto;
    left: auto;
  }
  
  @media (max-width: 700px), (max-height: 900px) {
    font-size: 11vw;
    line-height: 12vw;
  }
`


export default function NameText() {
  return (
    <NameSurname>Матвей Карпов</NameSurname>
  )
}
