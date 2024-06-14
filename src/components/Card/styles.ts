import styled from 'styled-components'
import { colors } from '../../styles'

export const Ul = styled.ul`
  width: 100%;
  display: flex;
  overflow-x: scroll;
  gap: 10px;
  scroll-behavior: smooth;
  justify-content: space-between;

  @media (min-width: 1600px) {
    gap: 30px;
  }
  @media (max-width: 678px) {
    width: 90%;
  }
`

export const Case = styled.div`
  width: 330px;
  height: 300px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 12px;
  border: 1px solid rgba(17, 17, 17, 0.1);
  margin-bottom: 10px;
  transition: all linear 0.2s;

  span {
    color: ${colors.orange};
    font-size: 24px;
    font-weight: 500;
    transition: all linear 0.2s;
  }

  p {
    width: 270px;
    color: ${colors.black};
    height: 60%;
    line-height: 22px;
    font-size: 18px;
    font-weight: inherit;
    transition: all linear 0.2s;
  }

  a {
    display: flex;
    color: ${colors.orange};
    font-size: 18px;
    font-weight: 500;
    align-items: center;
    transition: all linear 0.2s;

    img {
      width: 20px;
      margin-left: 10px;
      margin-bottom: -2px;
      transition: all linear 0.2s;

      &:hover {
        transform: translateX(5px);
      }
    }
  }

  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  &:hover {
    box-shadow:
      inset 2px 2px 4px rgba(0, 0, 0, 0.35),
      inset -2px -2px 4px rgba(255, 255, 255, 0.9);

    span {
      margin-left: 4px;
      margin-top: 4px;
      font-size: 23.5px;
    }

    p {
      margin-left: 3px;
      margin-top: 4px;
      font-size: 17.5px;
    }

    a {
      margin-left: 4px;
      margin-top: 4px;
      font-size: 17.5px;
    }

    img {
      width: 19.5px;
      margin-bottom: -4px;
      margin-left: 9.5px;
    }
  }

  @media (min-width: 1600px) {
    width: 440px;
    height: 400px;

    span {
      font-size: 26px;
    }

    p {
      width: auto;
      font-size: 23px;
    }

    a {
      font-size: 20px;

      img {
        margin-bottom: -4px;
      }
    }

    &:hover {
      span {
        font-size: 25.5px;
      }

      p {
        font-size: 22.8px;
      }

      a {
        font-size: 19.5px;

        img {
          width: 19.5px;
          margin-bottom: -2px;
        }
      }
    }
  }

  @media (max-width: 678px) {
    width: 280px;
    height: 300px;

    span {
      font-size: 20px;
    }

    p {
      width: 97%;
      font-size: 14px;
    }

    a {
      font-size: 14px;
      width: 86px;

      img {
        width: 14px;
        margin-left: 5px;
      }
    }

    &:hover {
      span {
        margin-left: 4px;
        margin-top: 2px;
        font-size: 19.5px;
      }

      p {
        width: 96%;
        margin-left: 4px;
        margin-top: 2px;
        font-size: 13.8px;
      }

      a {
        margin-left: 4px;
        margin-top: 2px;
        font-size: 13.5px;
      }

      img {
        width: 13px;
        margin-bottom: -3px;
        margin-left: 4px;
      }
    }
  }
`
