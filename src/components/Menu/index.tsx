import VrGlasses from '../../assets/images/VrGlasses.png'
import marcoZero from '../../assets/images/marcoZeroTeste.jpg'

import * as S from './styles'

const Menu = () => (
  <>
    <S.Container id="sobre">
      <S.Image src={marcoZero} />
      <S.Main>
        <span>FULL STACK DEVELOPER </span>
        <p>by recife</p>
      </S.Main>
      <S.Aside>
        <img src={VrGlasses} />
      </S.Aside>
    </S.Container>
  </>
)

export default Menu
