import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size:14px;
    font-family: Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  body {
    margin: 0;
    padding: 0;
  }
  #root{
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
  }
  h1 {
    margin-top: 40px;
    font-size: 2rem;
  }
  ul{
    padding: 0;
    flex-wrap: wrap;
  }
  li{
    list-style-type: none;
  }
  a{
    text-decoration: none;
  }
`;
