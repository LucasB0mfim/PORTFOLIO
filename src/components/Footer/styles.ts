import styled from 'styled-components'
import { colors } from '../../styles'

export const Footerbar = styled.footer`
  width: 100%;
  height: 5vw;
  background: ${colors.orange};
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 1rem;

  @media (max-width: 678px) {
    height: 20vw;
    text-align: center;

    p {
      width: 80%;
    }
  }
`
