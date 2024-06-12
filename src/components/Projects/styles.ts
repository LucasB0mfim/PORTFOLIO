import styled from 'styled-components'

export const Container = styled.section`
  max-width: 1024px;
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1600px) {
    max-width: 1400px;
  }

  @media (max-width: 678px) {
    max-width: 678px;
  }
`

export const Title = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  h3 {
    color: #10001f;
    font-size: 40px;
    font-weight: 600;
    font-family: 'Chakra Petch', sans-serif;
  }

  @media (min-width: 1600px) {
    height: 30%;

    h3 {
      font-size: 65px;
    }
  }

  @media (max-width: 678px) {
    height: 30%;

    h3 {
      font-size: 40px;
    }
  }
`

export const CardList = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  align-items: center;

  @media (min-width: 1600px) {
    height: 70%;
    align-items: start;
    margin-top: 20px;
  }

  @media (max-width: 678px) {
    height: 70%;
    justify-content: center;
    align-items: start;
  }
`
