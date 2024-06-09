import githug from '../../assets/images/githubBig.png'
import seta from '../../assets/images/seta.png'

import * as S from './styles'

const Github = () => (
  <S.Container>
    <img src={githug} />
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
  </S.Container>
)

export default Github
