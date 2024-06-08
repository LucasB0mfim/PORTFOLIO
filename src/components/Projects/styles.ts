import styled from 'styled-components'

export const Container = styled.section`
  max-width: 1024px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.div`
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
`

export const CardList = styled.div`
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`
