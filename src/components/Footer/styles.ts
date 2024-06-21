import styled from 'styled-components'
import { colors } from '../../styles'

export const Footerbar = styled.footer`
  width: 100%;
  height: 76px;
  background: ${colors.orange};
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;

  @media (max-width: 678px) {
    text-align: center;
    font-size: 15px;

    p {
      width: 80%;
    }
  }
`
