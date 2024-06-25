import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.section`
  max-width: 1024px;
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1600px) {
    max-width: 1400px;
    height: 85vh;
  }

  @media (max-width: 678px) {
    max-width: 678px;
    height: 65vh;
  }

  @media (max-width: 380px) {
    height: 80vh;
  }
`

export const Title = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  h3 {
    color: ${colors.black};
    font-size: 2.5rem;
    font-weight: 600;
    font-family: 'Chakra Petch', sans-serif;
  }

  @media (min-width: 1600px) {
    height: 30vh;

    h3 {
      font-size: 4.06rem;
    }
  }

  @media (max-width: 678px) {
    height: 30vh;

    h3 {
      font-size: 2.5rem;
    }
  }
`

export const CardList = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media (min-width: 1600px) {
    height: 70vh;
    align-items: start;
    margin-top: 20px;
  }

  @media (max-width: 678px) {
    height: 70vh;
    justify-content: center;
    align-items: start;
    margin-bottom: 0px;
  }
`
