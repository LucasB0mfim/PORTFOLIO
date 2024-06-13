import styled from 'styled-components'
import { colors } from '../../styles'

export const Ul = styled.ul`
  width: 100%;
  display: flex;
  overflow-x: scroll;
  gap: 10px;
  scroll-behavior: smooth;
  justify-content: space-between;

  @media (min-width: 1600px) {
    gap: 30px;
  }
  @media (max-width: 678px) {
    width: 90%;
  }
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
  transition: all linear 0.2s;

  &:hover {
    box-shadow:
      inset 2px 2px 4px rgba(0, 0, 0, 0.35),
      inset -2px -2px 4px rgba(255, 255, 255, 0.9);

    span {
      font-size: 23.5px;
      transition: all linear 0.2s;
    }

    p {
      font-size: 17.5px;
      transition: all linear 0x.2s;
    }

    a {
      font-size: 17.5px;
      transition: all linear 0.2s;
    }

    img {
      width: 19.5px;
      margin-bottom: -4px;
      margin-left: 9.5px;
      transition: all linear 0.2s;
    }
  }

  user-drag: none; /* Bloqueia o arrastar da imagem */
  -webkit-user-drag: none; /* Bloqueia o arrastar da imagem no WebKit */
  user-select: none; /* Bloqueia a seleção do texto da imagem */
  -webkit-user-select: none; /* Bloqueia a seleção do texto da imagem no WebKit */
  -moz-user-select: none; /* Bloqueia a seleção do texto da imagem no Firefox */
  -ms-user-select: none; /* Bloqueia a seleção do texto da imagem no Internet Explorer */

  span {
    color: ${colors.orange};
    font-size: 24px;
    font-weight: 500;
    transition: all linear 0.2s;
  }

  p {
    color: ${colors.black};
    height: 60%;
    font-size: 18px;
    font-weight: inherit;
    transition: all linear 0.2s;

    @media (max-width: 678px) {
      font-size: 15px;
      display: flex;
    }
  }

  a {
    display: flex;
    color: ${colors.orange};
    font-size: 18px;
    font-weight: 500;
    align-items: center;
    transition: all linear 0.2s;

    img {
      width: 20px;
      margin-left: 10px;
      margin-bottom: -2px;
      transition: all linear 0.2s;

      &:hover {
        transform: translateX(5px); /* Move a seta 5px para a direita */
      }
    }
  }

  @media (min-width: 1600px) {
    width: 440px;
    height: 400px;

    span {
      font-size: 26px;
    }

    p {
      font-size: 23px;
    }

    a {
      font-size: 20px;
    }
  }

  @media (max-width: 678px) {
    width: 280px;
    height: 300px;

    a {
      font-size: 15px;
    }
  }
`
