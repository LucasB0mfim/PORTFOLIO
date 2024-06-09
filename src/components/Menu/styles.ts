import styled from 'styled-components'

export const Container = styled.section`
  max-width: 1024px;
  width: 100%;
  height: calc(100vh - 76px);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Main = styled.main`
  width: 60%;
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
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;

  img {
    display: flex;
  }
`
