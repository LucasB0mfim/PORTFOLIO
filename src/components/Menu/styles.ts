import styled from 'styled-components'

export const Container = styled.section`
  max-width: 1024px;
  width: 100%;
  height: calc(100vh - 76px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  // background: #fff;
`

export const Main = styled.main`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    font-size: 20px;
    line-height: 35px;
    color: #10001f;
  }
`

export const Aside = styled.aside`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;

  img {
    display: flex;
  }
`
