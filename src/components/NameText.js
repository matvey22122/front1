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
  
  @media (max-width: 1000px) {
    position: relative;
    top: auto;
    left: auto;
    
    font-size: 11vw;
    line-height: 12vw;
  }
`


export default function NameText() {
  return (
    <NameSurname>Матвей Карпов</NameSurname>
  )
}
