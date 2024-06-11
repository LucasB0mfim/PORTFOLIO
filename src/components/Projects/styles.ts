import styled from 'styled-components'

export const Container = styled.section`
  height: 100vh;
  max-width: 1024px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1600px) {
    max-width: 1600px;
  }

  @media (max-width: 678px) {
    max-width: 678px;
    height: 100vh;
  }
`

export const Title = styled.div`
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

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

export const CardList = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 678px) {
    height: 70%;
    justify-content: center;
    align-items: start;
  }
`
