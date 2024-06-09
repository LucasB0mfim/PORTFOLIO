import VrGlasses from '../../assets/images//VrGlasses.png'

import * as S from './styles'

const Menu = () => (
  <S.Container id="sobre">
    <S.Main>
      <span>FULL STACK DEVELOPER.</span>
    </S.Main>
    <S.Aside>
      <img src={VrGlasses} />
    </S.Aside>
  </S.Container>
)

export default Menu
