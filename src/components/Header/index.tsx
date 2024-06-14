import * as S from './styles'

const OFFSETS: { [key: string]: number } = {
  default: -100, // Ajuste este valor conforme necessário
  about: -100,
  tech: -76,
  projects: -76
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    const offset = OFFSETS[id] || OFFSETS.default
    const top = element.getBoundingClientRect().top + window.scrollY + offset
    window.scrollTo({
      top: top,
      behavior: 'smooth'
    })
  }
}

const Header = () => (
  <S.Container>
    <S.Headerbar>
      <S.Icon>
        <h1>Lucas</h1> <span>Bomfim</span>
      </S.Icon>
      <S.ItemsList>
        <ul>
          <li>
            <a onClick={() => scrollToSection('sobre')}>Início</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('tech')}>Tecnologias</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('projects')}>Projetos</a>
          </li>
        </ul>
      </S.ItemsList>
    </S.Headerbar>
  </S.Container>
)

export default Header
