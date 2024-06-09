import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'

export const Case = styled(HashLink)`
  width: 320px;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
  background: #000;
  box-shadow: 0px 0px 20px #000;
  margin-bottom: 30px;
  transition:
    height 0.2s,
    box-shadow 0.2s;
  overflow: hidden;
  height: 205px;

  img {
    width: 100%;
    border-radius: 5px;
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }

  &:hover {
    height: 300px; /* Altura ao passar o mouse */
    box-shadow: 0px 0px 30px #000;
  }
`

export const Description = styled.div`
  width: 100%;
  height: 95px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 48px;
  }
`
