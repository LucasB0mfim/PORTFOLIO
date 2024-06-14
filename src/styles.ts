import { createGlobalStyle } from 'styled-components'

export const colors = {
  yellow: '#fda61a',
  orange: '#ff6700',
  gray: 'rgb(245, 245, 245)',
  white: '#fff',
  black: '#10001f'
}

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
    background-color: ${colors.yellow};
    border-radius: 10px;
  }

  /* Cor do fundo da barra de rolagem */
  &::-webkit-scrollbar-track {
    background-color: ${colors.white};
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
  background:${colors.orange};
  overflow-x: hidden;
  overflow-y: hidden;
}

.containerGray {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: ${colors.gray};
}


@media (min-width: 1600px) {
  &::-webkit-scrollbar {
    width: 12px;
  }
}
`
