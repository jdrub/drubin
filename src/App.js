import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import Home from './Home';

export default () => {
  return (
    <div className="App">
      <BoxSizingGlobalStyle />
      <Home />
    </div>
  );
}

const BoxSizingGlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;