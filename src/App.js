import React from 'react';
import styled from 'styled-components'

import './Font.sass'

import JinguLogo from "./JinguLogo";
import NameText from "./NameText";
import Emoji from "./Emoji";

const Block = styled.div`
  @media (max-width: 1000px) {
    margin-top: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 63vh;
  }
`

function App() {
  return (
    <Block>
      <JinguLogo/>
      <NameText/>
      <Emoji/>
    </Block>
  );
}

export default App;
