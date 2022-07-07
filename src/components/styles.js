import { createGlobalStyle } from "styled-components";

const variables = {

  /* variables */

  clr_accent: '#e77d0c',
  clr_accent_op25: 'rgba(240, 140, 33, 0.25)',
  clr_accent_hover: '#d16c00',
  clr_additional: '#24211a',
  clr_bg: '#181714',
  clr_second: '#fefefe',
  clr_shadow: 'rgba(209, 216, 221, 0.4)',

  font_text: 'Roboto',
  font_title: 'Capture it',

  border: '1px solid rgba(240, 140, 33, 0.25)',

  /* media queries */

  media_mobile: '(max-width: 766px)',
  media_tablet: '(min-width: 767px) and (max-width: 1199px)',
  media_desctop: '(min-width: 1200px)',


  /* animations */

  animation_rotate: `
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `,
}

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  ::selection {
    background: rgba(240, 140, 33, 0.3);
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', 'Open-Sans', 'Arial', Sans-Serif;
    line-height: 1.5;
    color: ${variables.clr_second};
    background-color: ${variables.clr_bg};
    overflow-x: hidden;
  }
`;

export {variables as c}