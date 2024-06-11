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

  @media (max-width: 678px) {
    max-width: 678px;
    flex-direction: column;
    position: relative;
    overflow-y: hidden;
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
    color: #fff;
    width: 100%;
    font-weight: 600;
    font-size: 42px;
    font-family: 'Chakra Petch', sans-serif;
    border-right: 4px solid;
    white-space: nowrap;
    overflow: hidden;
    animation:
      typing 3s steps(19),
      blinking 0.5s infinite step-end alternate;

    @media (min-width: 1600px) {
      font-size: 57px;
      border-right: 10px solid;
      margin-bottom: -80px;
    }
    @media (max-width: 678px) {
      font-size: 1.7rem;
      width: 90%;
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

  @media (max-width: 678px) {
    width: 100%;
    height: 40%;
  }
`

export const Aside = styled.aside`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  overflow-y: hidden;

  img {
    display: flex;
    filter: drop-shadow(0px 0px 10px #000);

    @media (min-width: 1600px) {
      width: 95%;
    }

    @media (max-width: 678px) {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }

  @media (max-width: 678px) {
    width: 100%;
    height: 60%;
  }
`
