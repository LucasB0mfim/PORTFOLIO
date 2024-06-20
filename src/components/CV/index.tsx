import * as S from './styles'

const CV = () => (
  <S.Container>
    <div>
      <h3>Confira meu currículo!</h3>
      <p>Baixe meu currículo para mais informações detalhadas.</p>
    </div>
    <S.ButtonContainer>
      <S.Btnbackground></S.Btnbackground>
      <S.Btn>
        <a href="/Currículo FullStack - Lucas Bomfim_v2.pdf" download>
          Baixar
        </a>
      </S.Btn>
    </S.ButtonContainer>
  </S.Container>
)

export default CV
