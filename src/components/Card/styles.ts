import styled from 'styled-components'

export const Ul = styled.ul`
  width: 100%;
  display: flex;
  overflow-x: scroll;
  gap: 10px;
  scroll-behavior: smooth;
  justify-content: center;

  @media (min-width: 1600px) {
    gap: 30px;
  }
  @media (max-width: 678px) {
    width: 90%;
    justify-content: space-between;
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
    height: 60%;
    font-size: 18px;
    font-weight: inherit;

    @media (max-width: 678px) {
      font-size: 15px;
      display: flex;
      align-items: center;
    }
  }

  a {
    display: flex;
    color: #ff6600;
    font-size: 18px;
    font-weight: 500;
    align-items: center;

    img {
      width: 20px;
      margin-left: 10px;
      margin-bottom: -2px;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: translateX(5px); /* Move a seta 5px para a direita */
    }

    @media (max-width: 678px) {
      font-size: 15px;
    }
  }

  @media (min-width: 1600px) {
    width: 440px;
    height: 400px;

    span {
      font-size: 26px;
    }

    p {
      font-size: 20px;
    }

    a {
      font-size: 20px;
    }
  }
  @media (max-width: 678px) {
    width: 280px;
    height: 300px;
  }
`
