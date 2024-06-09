import teste1 from '../../assets/images/teste4.jpg'
import seta from '../../assets/images/seta.png'

import * as S from './styles'

const Github = () => (
  <S.Container>
    <S.Box>
      <span>Veja mais projetos no meu github!</span>
      <a
        href="https://github.com/LucasB0mfim?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        <span></span>Conectar
        <img src={seta} />
      </a>
    </S.Box>
    <img src={teste1} />
  </S.Container>
)

export default Github
