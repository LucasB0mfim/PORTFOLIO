import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  font-family: "Roboto", sans-serif;

  /* Largura da barra de rolagem */
  &::-webkit-scrollbar {
    width: 8px;
  }

  /* Cor do controle da barra de rolagem */
  &::-webkit-scrollbar-thumb {
    background-color: #fda61a;
    border-radius: 10px;
  }

  /* Cor do fundo da barra de rolagem */
  &::-webkit-scrollbar-track {
    background-color: #fff;
  }
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.containerOrange {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background:#ff6700;
  overflow-x: hidden;
  overflow-y: hidden;
}

.containerGray {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: rgb(245, 245, 245);
}


@media (min-width: 1600px) {
  &::-webkit-scrollbar {
    width: 12px;
  }
}
`
