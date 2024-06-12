import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  max-width: 1024px;
  width: 100%;
  height: calc(100vh - 76px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-y: hidden;

  @media (min-width: 1600px) {
    max-width: 1400px;
  }

  @media (max-width: 678px) {
    max-width: 678px;
    flex-direction: column;
    position: relative;
    overflow-y: hidden;
  }
`

export const Main = styled.main`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  span {
    color: #fff;
    width: 100%;
    font-size: 42px;
    font-weight: 600;
    font-family: 'Chakra Petch', sans-serif;
    border-right: 4px solid;
    white-space: nowrap;
    overflow: hidden;
    animation:
      typing 3s steps(19),
      blinking 0.5s infinite step-end alternate;

    user-drag: none; /* Bloqueia o arrastar da imagem */
    -webkit-user-drag: none; /* Bloqueia o arrastar da imagem no WebKit */
    user-select: none; /* Bloqueia a seleção do texto da imagem */
    -webkit-user-select: none; /* Bloqueia a seleção do texto da imagem no WebKit */
    -moz-user-select: none; /* Bloqueia a seleção do texto da imagem no Firefox */
    -ms-user-select: none; /* Bloqueia a seleção do texto da imagem no Internet Explorer */

    @media (min-width: 1600px) {
      font-size: 57px;
      border-right: 10px solid;
      margin-bottom: -80px;
    }

    @media (max-width: 678px) {
      font-size: 7.5vw;
      width: 90%;
    }
  }

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blinking {
    50% {
      border-color: transparent;
    }
  }

  @media (max-width: 678px) {
    width: 100%;
    height: 40%;
  }
`

export const Aside = styled.aside`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;
  overflow-x: hidden;

  img {
    position: absolute;
    bottom: 0;
    filter: drop-shadow(0px 0px 10px #000);
    height: 80vh;

    @media (max-width: 678px) {
      width: 100%;
      height: auto;
    }
  }

  @media (max-width: 678px) {
    width: 100%;
    height: 60%;
  }
`
