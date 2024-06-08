import * as S from './styles'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Para uma rolagem suave
  })
}

const Header = () => (
  <S.Container>
    <S.Headerbar>
      <S.Icon>
        <h1>
          Front end <span>Developer</span>
        </h1>
      </S.Icon>
      <S.ItemsList>
        <ul>
          <li>
            <a onClick={scrollToTop}>Sobre</a>
          </li>
          <li>
            <S.Link smooth to="#tech">
              Tecnologias
            </S.Link>
          </li>
          <li>
            <S.Link smooth to="/#projects">
              Projetos
            </S.Link>
          </li>
        </ul>
      </S.ItemsList>
    </S.Headerbar>
  </S.Container>
)

export default Header
