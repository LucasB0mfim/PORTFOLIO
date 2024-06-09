import disney from '../../assets/images/disney+.png'
import html from '../../assets/images/htmlColor.png'
import css from '../../assets/images/cssColor.png'
import jquery from '../../assets/images/jqueryColor.png'

import * as S from './styles'

const Card = () => (
  <>
    <S.Case to="https://siteclonedisneyplus.vercel.app/" target="_blank">
      <img src={disney} alt="Disney+" />
      <S.Description>
        <img src={html} />
        <img src={css} />
        <img src={jquery} />
      </S.Description>
    </S.Case>
  </>
)

export default Card
