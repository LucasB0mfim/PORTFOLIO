import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 50vh;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 100%;
    object-fit: cover;
  }

  span {
    color: #fff;
    font-size: 50px;
    font-weight: 500;
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  a {
    display: flex;
    color: #fff;
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
