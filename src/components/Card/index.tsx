import { useRef, useState, MouseEvent } from 'react'

import projetos from '../../projetos'

import seta from '../../assets/images/seta.png'

import * as S from './styles'

const Card = () => {
  const ulRef = useRef<HTMLUListElement | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const startDragging = (e: MouseEvent<HTMLUListElement>) => {
    if (ulRef.current) {
      setIsDragging(true)
      setStartX(e.pageX - ulRef.current.offsetLeft)
      setScrollLeft(ulRef.current.scrollLeft)
    }
  }

  const stopDragging = () => {
    setIsDragging(false)
  }

  const onDragging = (e: MouseEvent<HTMLUListElement>) => {
    if (!isDragging || !ulRef.current) return
    e.preventDefault()
    const x = e.pageX - ulRef.current.offsetLeft
    const walk = (x - startX) * 2 // Multiplicar para aumentar a velocidade do arrasto
    ulRef.current.scrollLeft = scrollLeft - walk
  }

  return (
    <S.Ul
      ref={ulRef}
      onMouseDown={startDragging}
      onMouseLeave={stopDragging}
      onMouseUp={stopDragging}
      onMouseMove={onDragging}
    >
      {projetos.map((projeto) => (
        <li key={projeto.id}>
          <S.Case>
            <span>{projeto.name}</span>
            <p>{projeto.description}</p>
            <a href={projeto.url} target="_blank" rel="noreferrer">
              ver projeto
              <img src={seta} />
            </a>
          </S.Case>
        </li>
      ))}
    </S.Ul>
  )
}

export default Card
