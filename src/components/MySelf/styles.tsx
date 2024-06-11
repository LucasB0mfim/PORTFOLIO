import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;

  @media (min-width: 1600px) {
    max-width: 1400px;
  }

  @media (max-width: 678px) {
    max-width: 678px;
    width: 80%;
  }
`

export const Title = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;

  h3 {
    color: #10001f;
    font-size: 40px;
    font-weight: 600;
    font-family: 'Chakra Petch', sans-serif;
  }

  @media (min-width: 1600px) {
    h3 {
      font-size: 70px;
    }
  }

  @media (max-width: 678px) {
    height: 30%;
  }
`

export const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: start;
  text-align: center;
  height: 50%;

  p {
    color: #fff;
    background: #ff6700;
    font-size: 18px;
    font-weight: 400;
    padding: 20px;
    border-radius: 12px;
  }

  @media (min-width: 1600px) {
    p {
      font-size: 25px;
    }
  }

  @media (max-width: 678px) {
    height: 70%;
    text-align: justify;
  }
`
