import styled from 'styled-components'

export const Ul = styled.ul`
  width: 100%;
  display: flex;
  overflow-x: scroll;
  gap: 10px;
  scroll-behavior: smooth;
`

export const Case = styled.div`
  width: 330px;
  height: 300px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 12px;
  border: 1px solid rgba(17, 17, 17, 0.1);
  margin-bottom: 10px;

  user-drag: none; /* Bloqueia o arrastar da imagem */
  -webkit-user-drag: none; /* Bloqueia o arrastar da imagem no WebKit */
  user-select: none; /* Bloqueia a seleção do texto da imagem */
  -webkit-user-select: none; /* Bloqueia a seleção do texto da imagem no WebKit */
  -moz-user-select: none; /* Bloqueia a seleção do texto da imagem no Firefox */
  -ms-user-select: none; /* Bloqueia a seleção do texto da imagem no Internet Explorer */

  span {
    font-size: 24px;
    font-weight: 500;
  }

  p {
    font-size: 18px;
    font-weight: inherit;
  }

  a {
    display: flex;
    color: #ff6600;
    font-size: 18px;
    font-weight: inherit;

    img {
      width: 20px;
      margin-left: 10px;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: translateX(5px); /* Move a seta 5px para a direita */
    }
  }
`
