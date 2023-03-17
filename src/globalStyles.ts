import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all .3s ease;
    font-family: "Inter";
  }
`;
export default GlobalStyle;
