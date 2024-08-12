import portoDigital from '../../assets/images/portoDigital.jpg'
import VrGlasses from '../../assets/images/VrGlasses.png'

import * as S from './styles'

const Menu = () => (
  <>
    <S.Container id="sobre">
      <S.Image src={portoDigital} />
      <S.Main>
        <span>FULLSTACK DEVELOPER </span>
        <p>Recife/PE</p>
      </S.Main>
      <S.Aside>
        <img src={VrGlasses} />
      </S.Aside>
    </S.Container>
  </>
)

export default Menu
