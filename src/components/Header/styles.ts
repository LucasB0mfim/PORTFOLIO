import styled from 'styled-components'

import { HashLink } from 'react-router-hash-link'
import { colors } from '../../styles'

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 76px;
  background-color: ${colors.white};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  @media (min-width: 1600px) {
    height: 100px;
  }

  @media (max-width: 678px) {
    max-width: 678px;
    width: 100%;
  }
`

export const Headerbar = styled.header`
  max-width: 1024px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1600px) {
    max-width: 1400px;
  }

  @media (max-width: 678px) {
    max-width: 678px;
    width: 100%;
  }
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  user-drag: none; /* Bloqueia o arrastar da imagem */
  -webkit-user-drag: none; /* Bloqueia o arrastar da imagem no WebKit */
  user-select: none; /* Bloqueia a seleção do texto da imagem */
  -webkit-user-select: none; /* Bloqueia a seleção do texto da imagem no WebKit */
  -moz-user-select: none; /* Bloqueia a seleção do texto da imagem no Firefox */
  -ms-user-select: none; /* Bloqueia a seleção do texto da imagem no Internet Explorer */

  img {
    width: 50px;
    height: 65%;
    filter: drop-shadow(0px 1px 3px ${colors.gray});
  }

  h1 {
    color: ${colors.black};
    font-family: 'Shadows Into Light', cursive;
    font-size: 24px;
    font-weigth: 600;
    margin-left: 16px;

    span {
      font-family: 'Shadows Into Light', cursive;
      font-weigth: 600;
      font-size: 24px;
      color: ${colors.orange};
    }

    @media (min-width: 1600px) {
      font-size: 40px;

      span {
        font-size: 40px;
      }
    }
  }
  @media (max-width: 678px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  user-drag: none; /* Bloqueia o arrastar da imagem */
  -webkit-user-drag: none; /* Bloqueia o arrastar da imagem no WebKit */
  user-select: none; /* Bloqueia a seleção do texto da imagem */
  -webkit-user-select: none; /* Bloqueia a seleção do texto da imagem no WebKit */
  -moz-user-select: none; /* Bloqueia a seleção do texto da imagem no Firefox */
  -ms-user-select: none; /* Bloqueia a seleção do texto da imagem no Internet Explorer */
`

export const ItemsList = styled.div`
  ul {
    display: flex;

    li {
      margin-left: 32px;
    }

    a {
      color: ${colors.black};
      font-weight: 400;
      cursor: pointer;

      &:hover {
        color: ${colors.orange};
      }

      @media (min-width: 1600px) {
        font-size: 23px;
      }
    }
    @media (max-width: 678px) {
      display: none;
    }
  }
`

export const Link = styled(HashLink)`
  color: ${colors.black};
  font-weight: 400;
  cursor: pointer;

  &:hover {
    color: ${colors.orange};
  }
`
