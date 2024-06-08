import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'

export const Case = styled(HashLink)`
  height: 350px;
  width: 300px;
  padding: 8px;
  border-radius: 5px;
  background-color: #10001f;
  cursor: pointer;

  img {
    width: 100%;
    border-radius: 5px;

    user-drag: none; /* Bloqueia o arrastar da imagem */
    -webkit-user-drag: none; /* Bloqueia o arrastar da imagem no WebKit */
    user-select: none; /* Bloqueia a seleção do texto da imagem */
    -webkit-user-select: none; /* Bloqueia a seleção do texto da imagem no WebKit */
    -moz-user-select: none; /* Bloqueia a seleção do texto da imagem no Firefox */
    -ms-user-select: none; /* Bloqueia a seleção do texto da imagem no Internet Explorer */
  }
`

export const Title = styled.h3`
  color: #fff;
  font-weight: 400;
  margin: 10px 0;
`

export const Description = styled.p`
  color: #fff;
  font-size: 14px;
`
