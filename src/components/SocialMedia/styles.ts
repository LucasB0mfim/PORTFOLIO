import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 180px;
  }

  @media (min-width: 1600px) {
    max-width: 1400px;

    img {
      width: 280px;
    }
  }
`

export const Box = styled.div`
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    color: #ff6600;
    font-size: 50px;
  }

  p {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 10px 0;
  }

  a {
    display: flex;
    color: #ff6600;
    font-size: 18px;
    font-weight: 500;

    img {
      width: 20px;
      margin-left: 10px;
      margin-bottom: -2px;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: translateX(5px); /* Move a seta 5px para a direita */
    }
  }
  @media (min-width: 1600px) {
    h3 {
      font-size: 60px;
    }

    a {
      font-size: 22px;
      align-items: center;

      img {
        width: 22px;
      }
    }
  }
`
