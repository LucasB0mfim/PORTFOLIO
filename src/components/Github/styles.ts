import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 60vh;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 200px;
    object-fit: cover;
  }

  @media (min-width: 1600px) {
    max-width: 1400px;

    img {
      width: 300px;
    }
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;

  > span {
    color: #000;
    font-size: 50px;
    font-weight: 600;
  }

  a {
    display: flex;
    color: #000;
    font-size: 18px;
    font-weight: 500;
    margin-top: 20px;
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
  }
  @media (min-width: 1600px) {
    width: 60%;
    height: 230px;
    > span {
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
