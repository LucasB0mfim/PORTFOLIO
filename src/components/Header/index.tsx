import * as S from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => (
  <S.Container>
    <S.Headerbar>
      <S.Icon>
        <img src={logo} />
        <h1>
          Front end <span>Developer</span>
        </h1>
      </S.Icon>
      <S.ItemsList>
        <ul>
          <li>
            <S.Link to="/#">Sobre</S.Link>
          </li>
          <li>
            <S.Link to="/#">Tecnologias</S.Link>
          </li>
          <li>
            <S.Link to="/#">Projetos</S.Link>
          </li>
        </ul>
      </S.ItemsList>
    </S.Headerbar>
  </S.Container>
)

export default Header
