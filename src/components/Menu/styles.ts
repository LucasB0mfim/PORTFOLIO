import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  max-width: 1024px;
  width: 100%;
  height: calc(100vh - 76px);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Main = styled.main`
  width: 50%;
`

export const Aside = styled.aside`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: end;

  img {
    position: absolute;
    bottom: 0;
    right: 0.5%;
  }
`
