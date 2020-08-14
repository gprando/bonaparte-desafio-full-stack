import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    font-size: 60%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 1.6rem;
    font-family: 'Varta', sans-serif;
  }

  button {
    transition: background 0.2s;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
