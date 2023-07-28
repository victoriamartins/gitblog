import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: ${(props) => props.theme['base-background']};
  }

  body, input, text-area, button {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    color: ${(props) => props.theme['base-title']};
  }
`
