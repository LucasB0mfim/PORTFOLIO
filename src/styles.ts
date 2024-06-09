import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
  list-style: none;
  text-decoration: none;

  /* Largura da barra de rolagem */
  &::-webkit-scrollbar {
    width: 8px;
  }

  /* Cor do controle da barra de rolagem */
  &::-webkit-scrollbar-thumb {
    background-color: #ff6600;
    border-radius: 10px;
  }

  /* Cor do fundo da barra de rolagem */
  &::-webkit-scrollbar-track {
    background-color: #fff;
  }
}

body {
  background: #ff6600;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
}

.gradi {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(255,255,255);
  background: linear-gradient(180deg,
  rgba(255,255,255,1) 0%,
  rgba(255,103,0,1) 100%);
}

`
