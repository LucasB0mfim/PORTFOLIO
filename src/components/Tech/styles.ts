import styled from 'styled-components'

export const Container = styled.section`
  max-width: 1024px;
  width: 100%;
  height: calc(100vh - 76px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1600px) {
    max-width: 1400px;
  }

  @media (max-width: 678px) {
    max-width: 678px;
    height: 55vh;
  }
`

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30%;

  h3 {
    color: #10001f;
    font-size: 40px;
    font-weight: 600;
    font-family: 'Chakra Petch', sans-serif;

    @media (min-width: 1600px) {
      font-size: 70px;
    }
  }
  @media (max-width: 678px) {
    height: 30%;
  }
`

export const Aside = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px 30px;
    height: auto;

    li {
      width: 42px;
      height: 42px;

      img {
        width: 100%;
        height: 100%;
        cursor: pointer;
        transition: all linear 0.2s;

        user-drag: none; /* Bloqueia o arrastar da imagem */
        -webkit-user-drag: none; /* Bloqueia o arrastar da imagem no WebKit */
        user-select: none; /* Bloqueia a seleção do texto da imagem */
        -webkit-user-select: none; /* Bloqueia a seleção do texto da imagem no WebKit */
        -moz-user-select: none; /* Bloqueia a seleção do texto da imagem no Firefox */
        -ms-user-select: none; /* Bloqueia a seleção do texto da imagem no Internet Explorer */

        &:hover {
          transition: all linear 0.2s;
          transform: scale(1.3);
        }
      }

      @media (min-width: 1600px) {
        width: 65px;
        height: 65px;
      }
    }
  }
  @media (max-width: 678px) {
    height: 70%;
    width: 80%;
  }
`
