import styled from 'styled-components'

export const Footerbar = styled.footer`
  width: 100%;
  height: 70px;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 678px) {
    text-align: center;
    font-size: 15px;

    p {
      width: 80%;
    }
  }
`
