import styled from 'styled-components'

export const Container = styled.section`
  max-width: 1024px;
  width: 100%;
  height: calc(100vh - 76px);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1600px) {
    max-width: 1400px;
  }
`

export const Main = styled.main`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-size: 50px;
    font-weight: 600;
    font-family: 'Chakra Petch', sans-serif;
    border-right: 4px solid;
    width: 20ch;
    white-space: nowrap;
    overflow: hidden;
    animation:
      typing 2s steps(20),
      blinking 0.5s infinite step-end alternate;

    @media (min-width: 1600px) {
      font-size: 80px;
      border-right: 10px solid;
      margin-bottom: -80px;
    }
  }

  @keyframes typing {
    from {
      width: 0;
    }
  }
  @keyframes blinking {
    50% {
      border-color: transparent;
    }
  }
`

export const Aside = styled.aside`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;

  img {
    display: flex;

    @media (min-width: 1600px) {
      width: 95%;
    }
  }
`
