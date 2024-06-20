import styled from 'styled-components'
import { colors } from '../../styles'

export const Btn = styled.div`
  background-color: #cc5200;
  color: white;
  padding: 15px 30px;
  border: 1px solid #a84300;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  transition: all 0.1s ease-in-out;

  &:hover {
    transform: translate(0, 5px);
  }

  a {
    color: ${colors.white};
    font-weight: 500;
  }

  @media (max-width: 678px) {
    animation: moveUpDown 1.5s ease-in-out infinite;
  }

  @keyframes moveUpDown {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(5px);
    }
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    color: ${colors.white};
    font-size: 50px;
  }

  @media (min-width: 1600px) {
    max-width: 1400px;

    h3 {
      font-size: 60px;
    }

    ${Btn} {
      padding: 20px 40px;
      font-size: 18px;
    }
  }

  @media (max-width: 678px) {
    max-width: 678px;
    flex-direction: column;
    justify-content: center;

    h3 {
      width: 300px;
      font-size: 30px;
      text-align: center;
      margin-bottom: 10%;
    }
  }
`

export const ButtonContainer = styled.div`
  position: relative;
  display: inline-block;
`

export const Btnbackground = styled.div`
  background-color: #a84300;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  transform: translate(0, 5px);
  border-radius: 5px;
`
