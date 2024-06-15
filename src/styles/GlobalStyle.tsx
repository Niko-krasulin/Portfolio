import React from 'react';
import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle `
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'NEXT_ART';
    src: url("../../public/fonts/NEXT_ART/NEXT ART_Bold.otf") format('otf');
    font-weight: normal;
    font-style: normal;
    
  }

  @font-face {
    font-family: 'Arodora';
    src: url("../../public/fonts/Arodora/ArodoraPro-Light.otf") format('otf');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font};
    min-width: 360px;

  }

  a {
    text-decoration: none;
    color: ${theme.colors.font};
    cursor: pointer;
  }

  ul {
    list-style: none;

  }

  button {
    border: none;
    background-color: unset;
    cursor: pointer;
  }

  section:nth-of-type(odd) {
    background-color: ${theme.colors.primaryBg};
  }

  section:nth-of-type(even) {
    background-color: ${theme.colors.secondaryBg};
  }

`