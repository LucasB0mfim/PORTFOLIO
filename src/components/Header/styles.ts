import styled from 'styled-components'

import { HashLink } from 'react-router-hash-link'

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
  background-color: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 1600px) {
    height: 80px;
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
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  img {
    width: 50px;
    height: 65%;
    filter: drop-shadow(0px 1px 3px #9e9e9e);

    user-drag: none; /* Bloqueia o arrastar da imagem */
    -webkit-user-drag: none; /* Bloqueia o arrastar da imagem no WebKit */
    user-select: none; /* Bloqueia a seleção do texto da imagem */
    -webkit-user-select: none; /* Bloqueia a seleção do texto da imagem no WebKit */
    -moz-user-select: none; /* Bloqueia a seleção do texto da imagem no Firefox */
    -ms-user-select: none; /* Bloqueia a seleção do texto da imagem no Internet Explorer */
  }

  h1 {
    color: #10001f;
    font-family: 'Shadows Into Light', cursive;
    font-size: 24px;
    font-weigth: 600;
    margin-left: 16px;

    span {
      font-family: 'Shadows Into Light', cursive;
      font-weigth: 600;
      font-size: 24px;
      color: #ff6700;
    }

    @media (min-width: 1600px) {
      font-size: 35px;

      span {
        font-size: 35px;
      }
    }
  }
`

export const ItemsList = styled.div`
  ul {
    display: flex;

    li {
      margin-left: 32px;
    }

    a {
      color: #10001f;
      font-weight: 400;
      cursor: pointer;

      &:hover {
        color: #ff6700;
      }

      @media (min-width: 1600px) {
        font-size: 20px;
      }
    }
  }
`

export const Link = styled(HashLink)`
  color: #10001f;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    color: #ff6700;
  }
`
