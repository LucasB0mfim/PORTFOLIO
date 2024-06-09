import seta from '../../assets/images/seta.png'
import linkedin from '../../assets/images/linkedin.png'

import * as S from './styles'

const SocialMedia = () => (
  <S.Container>
    <S.Box>
      <h3>Me siga no LinkedIn!</h3>
      <p>Se conecte comigo para acompanhar as novidades!</p>
      <a
        href="https://www.linkedin.com/in/lucasbomfim06"
        target="_blank"
        rel="noreferrer"
      >
        <span></span>Conectar
        <img src={seta} />
      </a>
    </S.Box>
    <img src={linkedin} />
  </S.Container>
)

export default SocialMedia
