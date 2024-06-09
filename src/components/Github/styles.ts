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

  span {
    color: #000;
    font-size: 50px;
    font-weight: 600;
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  a {
    display: flex;
    color: #ff6600;
    font-size: 18px;
    font-weight: inherit;
    margin-top: 20px;
    align-items: center;

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
