import { useState } from 'react'

import icons from '../../api/icons'

import * as S from './styles'

const Tech = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  return (
    <S.Container id="tech">
      <S.Main>
        <h3>Ferramentas</h3>
      </S.Main>
      <S.Aside>
        <ul>
          {icons.map((icon) => (
            <li
              key={icon.id}
              onMouseEnter={() => setHoveredIcon(icon.name)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <img src={icon.icon} alt={icon.name} />
            </li>
          ))}
        </ul>
        {hoveredIcon ? (
          <S.HoveredIconName>{hoveredIcon}</S.HoveredIconName>
        ) : (
          <S.HoveredIconName>...</S.HoveredIconName>
        )}
      </S.Aside>
    </S.Container>
  )
}

export default Tech
