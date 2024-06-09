import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

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
    font-weight: inherit;

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
