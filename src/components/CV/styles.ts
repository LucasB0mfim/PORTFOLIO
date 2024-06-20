import styled from 'styled-components'
import { colors } from '../../styles'

export const Btn = styled.div`
  background-color: #cc5200;
  color: white;
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
    padding: 20px 40px;
    display: flex;
    width: auto;
    height: auto;
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

  @media (min-width: 1600px) {
    a {
      padding: 10px 20px;
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

  > div {
    h3 {
      color: ${colors.white};
      font-size: 3.1rem;
    }

    p {
      color: ${colors.white};
      font-size: 1.5rem;
      margin: 10px 0 10px 4px;
      font-weight: 500;
    }
  }

  @media (min-width: 1600px) {
    max-width: 1400px;

    > div {
      h3 {
        font-size: 60px;
      }
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
    text-align: center;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h3 {
        font-size: 30px;
      }

      p {
        width: 90%;
        font-size: 15px;
        margin: 1vh 0 3vh 0;
      }
    }
  }
`

export const ButtonContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 40px;

  @media (max-width: 678px) {
    margin-right: 0;
  }
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
