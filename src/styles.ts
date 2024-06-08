import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
  list-style: none;
  text-decoration: none;
}

.container {
  max-width: 1024px;
  width: 100%;
}
`
