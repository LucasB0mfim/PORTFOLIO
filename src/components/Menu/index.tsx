import VrGlasses from '../../assets/images//VrGlasses.png'

import * as S from './styles'

const Menu = () => (
  <S.Container id="sobre">
    <S.Main>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
        fugiat delectus minus, ad molestiae quis deleniti dolorum voluptas
        deserunt, voluptatum mollitia, tenetur qui. Repellat, quae aspernatur
        perspiciatis omnis placeat ratione? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Doloribus sunt ratione quaerat
        consequuntur perspiciatis non accusamus, laboriosam eligendi, odit eum,
        dolorem amet modi? Ducimus amet commodi necessitatibus qui labore eos!
      </p>
    </S.Main>
    <S.Aside>
      <img src={VrGlasses} />
    </S.Aside>
  </S.Container>
)

export default Menu
