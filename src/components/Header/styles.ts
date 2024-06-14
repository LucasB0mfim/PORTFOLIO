import { HashLink } from 'react-router-hash-link'

import { colors } from '../../styles'

import styled from 'styled-components'

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
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
  justify-content: center;
  align-items: start;
  flex-direction: column;
  height: 100%;
  margin-top: 5px;

  user-drag: none; /* Bloqueia o arrastar da imagem */
  -webkit-user-drag: none; /* Bloqueia o arrastar da imagem no WebKit */
  user-select: none; /* Bloqueia a seleção do texto da imagem */
  -webkit-user-select: none; /* Bloqueia a seleção do texto da imagem no WebKit */
  -moz-user-select: none; /* Bloqueia a seleção do texto da imagem no Firefox */
  -ms-user-select: none; /* Bloqueia a seleção do texto da imagem no Internet Explorer */

  h1 {
    color: ${colors.orange};
    font-family: 'Bebas Neue', sans-serif;
    font-size: 25px;
    line-height: 20px;
  }

  span {
    color: ${colors.black};
    font-family: 'Bebas Neue', sans-serif;
    font-size: 25px;
    margin-left: 10px;
    line-height: 20px;
  }

  @media (min-width: 1600px) {
    h1 {
      font-size: 40px;
      line-height: 32px;
    }

    span {
      font-size: 40px;
      line-height: 32px;
    }
  }

  @media (max-width: 678px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      line-height: 23px;
    }

    span {
      line-height: 23px;
      margin: 0;
    }
  }

  @media (max-width: 317px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      line-height: 20px;
    }

    span {
      line-height: 20px;
    }
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
