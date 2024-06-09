import seta from '../../assets/images/seta.png'

import * as S from './styles'

const SocialMedia = () => (
  <S.Container>
    <h3>Me siga no LinkedIn!</h3>
    <p>Se conecte comigo para acompanhar as novidades!</p>
    <a href="www.linkedin.com/in/lucasbomfim06" target="_blank">
      <span></span>Conectar
      <img src={seta} />
    </a>
  </S.Container>
)

export default SocialMedia
