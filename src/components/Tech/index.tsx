// Tech.tsx
import html from '../../assets/images/IconHTML.png'
import css from '../../assets/images/IconCSS.png'
import js from '../../assets/images/IconJS.png'
import react from '../../assets/images/IconReact.png'
import vue from '../../assets/images/IconVue.png'
import typescript from '../../assets/images/IconTypescript.png'
import sass from '../../assets/images/IconSass.png'
import less from '../../assets/images/IconLess.png'
import jquery from '../../assets/images/IconJquery.png'
import bootstrap from '../../assets/images/IconBootstrap.png'
import grunt from '../../assets/images/IconGrunt.png'
import gulp from '../../assets/images/IconGulp.png'
import jest from '../../assets/images/IconJest.png'
import cypress from '../../assets/images/IconCypress.png'
import postgre from '../../assets/images/IconPostgre.png'
import mysql from '../../assets/images/IconMysql.png'
import java from '../../assets/images/IconJava.png'

import * as S from './styles'

const Tech = () => (
  <S.Container id="tech">
    <S.Main>
      <h3>Tecnologias</h3>
    </S.Main>
    <S.Aside>
      <ul>
        <li>
          <img src={html} alt="Html 5" />
        </li>
        <li>
          <img src={css} alt="CSS" />
        </li>
        <li>
          <img src={js} alt="JavaScript" />
        </li>
        <li>
          <img src={typescript} alt="Typescript" />
        </li>
        <li>
          <img src={react} alt="React.js" />
        </li>
        <li>
          <img src={vue} alt="Vue.js" />
        </li>
        <li>
          <img src={sass} alt="Sass" />
        </li>
        <li>
          <img src={less} alt="Less" />
        </li>
        <li>
          <img src={jquery} alt="jQuery" />
        </li>
        <li>
          <img src={bootstrap} alt="Bootstrap" />
        </li>
        <li>
          <img src={grunt} alt="Grunt" />
        </li>
        <li>
          <img src={gulp} alt="Gulp" />
        </li>
        <li>
          <img src={jest} alt="Jest" />
        </li>
        <li>
          <img src={cypress} alt="Cypress" />
        </li>
        <li>
          <img src={postgre} alt="Postgre" />
        </li>
        <li>
          <img src={mysql} alt="MySQL" />
        </li>
        <li>
          <img src={java} alt="Java" />
        </li>
      </ul>
    </S.Aside>
  </S.Container>
)

export default Tech
