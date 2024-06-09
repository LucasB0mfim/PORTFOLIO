import styled from 'styled-components'

export const Container = styled.section`
  height: 100vh;
  max-width: 1024px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  }
`

export const CardList = styled.div`
  height: 70%;
  width: 100%;
`
