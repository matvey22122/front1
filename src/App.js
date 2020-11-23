import React from 'react';
import styled from 'styled-components'

import './assets/Font.sass'

import JinguLogo from "./components/JinguLogo";
import NameText from "./components/NameText";
import Emoji from "./components/Emoji";

const Block = styled.div`
  @media (max-width: 800px), (max-height: 900px) {
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
